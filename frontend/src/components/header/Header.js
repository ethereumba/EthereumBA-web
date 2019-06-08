import React, {Component} from 'react';
import {Grid} from '@material-ui/core';
import logo from '../../assets/ethBuenosAires.png';
import { Link } from 'react-router-dom'

import './header.scss'



export default class HeaderWhite extends Component {
    render() {
        let className = this.props.white ? 'main-header-white' : 'main-header'
        return (
            <div className={className}>
                <Grid container>
                    <Grid item xs={3}>
                        <img src={logo} className={"logo"} alt={"logo"}/>
                    </Grid>
                    <Grid item xs={6}>
                        <Grid container>
                            <Grid item xs={3}>
                                <Link
                                    to="/"
                                    rel="noopener noreferrer"
                                    className="text"
                                >HOME</Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link
                                    to="/events"
                                    rel="noopener noreferrer"
                                    className="text"
                                >EVENTS</Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link
                                    to="/education"
                                    rel="noopener noreferrer"
                                    className="text"
                                >EDUCATION</Link>
                            </Grid>
                            <Grid item xs={3}>
                                <Link
                                    to="/ecosystem"
                                    rel="noopener noreferrer"
                                    className="text"
                                >ECOSYSTEM</Link>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}/>
                </Grid>
            </div>
            );
    }
}