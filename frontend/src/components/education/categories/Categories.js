import React, { Component } from 'react'
import { Grid } from '@material-ui/core'
import './categories.scss'
import _groupBy from 'lodash/groupBy'
import _forEach from 'lodash/forEach'
import Category from '../category/Category'

const axios = require('axios')

export default class Categories extends Component {
  state = {
    arrayCategory: [],
  }

  componentDidMount = async () => {
    await this._fetchData()
  }

  formatData = data => {
    let arrayCategory = {}

    arrayCategory = _groupBy(data, 'category')
    this.setState({ arrayCategory: arrayCategory })
  }

  _fetchData = async () => {
    try {
      const response = await axios.get('http://www.mocky.io/v2/5d49cd68320000e47d600eca')
      this.formatData(response.data)
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    let { arrayCategory } = this.state
    let categoryKeys = Object.keys(arrayCategory)

    return (
      <div className={'categories'}>
        {categoryKeys.map(key => {
          let entries = arrayCategory[key]
          return <Category title={key} entries={entries} />
        })}
      </div>
    )
  }
}
