import React, { Component } from 'react'
import './categories.scss'
import _groupBy from 'lodash/groupBy'
import Category from '../category/Category'
import CircularProgress from '@material-ui/core/CircularProgress'
import { withStyles } from '@material-ui/core/styles'

const axios = require('axios')

const styles = () => ({
  progress: {
    position: 'absolute',
    top: 'calc(50vh - 20px)',
    left: 'calc(50vw - 20px)',
  },
})
class Categories extends Component {
  state = {
    arrayCategory: [],
    xhr: false,
  }

  componentDidMount = async () => {
    await this._fetchData()
  }

  formatData = data => {
    let arrayCategory = {},
      emptyState = false
    arrayCategory = _groupBy(data, 'category')
    if (arrayCategory === undefined || arrayCategory === {}) {
      emptyState = true
    }
    this.setState({ arrayCategory, emptyState })
  }

  _fetchData = async () => {
    this.setState({ xhr: true })
    try {
      const response = await axios.get('http://www.mocky.io/v2/5d49cd68320000e47d600eca')
      this.formatData(response.data)
    } catch (error) {
      console.error(error)
    } finally {
      this.setState({ xhr: false })
    }
  }

  render() {
    let { arrayCategory, xhr, emptyState } = this.state
    let categoryKeys = Object.keys(arrayCategory)
    const { classes } = this.props

    return (
      <div className={'categories'}>
        {xhr && <CircularProgress className={classes.progress} />}
        {!xhr &&
          !emptyState &&
          categoryKeys.map(key => {
            let entries = arrayCategory[key]
            return <Category title={key} entries={entries} />
          })}
        {!xhr && emptyState && <div className="categories__emptyState">No hay datos cargados aún</div>}
      </div>
    )
  }
}

export default withStyles(styles)(Categories)
