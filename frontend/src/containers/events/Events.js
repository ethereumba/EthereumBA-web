import React, {Component} from 'react';
import { Link } from 'react-router-dom';

export default class Events extends Component {
    render() {
        return (
            <div>
                Events<br />
                <Link to={'/'}>Home</Link>
            </div>
        );
    }
}