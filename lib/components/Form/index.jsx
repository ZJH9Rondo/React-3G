import React, { Component } from 'react';

import Input from '../Input/index.jsx';
import Button from '../Button/index.jsx';
import Checkbox from '../Checkbox/index.jsx';
import Icon from '../Icon/index.jsx';

import './style/index.less';

export default class Form extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount() {
        console.log(...this.props.children);
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}