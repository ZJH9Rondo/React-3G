import React,{ Component } from 'react';
require('./style/index.less');

export default class Icon extends Component{
    constructor (props){
        super(props);
    }

    render() {
        const { type } = this.props;
        const iconType = 'icon icon-'+type;

        return (
            <i className={iconType}></i>
        )
    }
}