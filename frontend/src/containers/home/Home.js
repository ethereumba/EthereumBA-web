import React, {Component} from 'react';
import {Link} from 'react-router-dom'
import Header from './../../components/header/Header';

import "./home.scss"
export default class Home extends Component {
    render() {
        return (
            <div>
                <Header/>
                <div className={"main"}/>
            </div>
        );
    }
}