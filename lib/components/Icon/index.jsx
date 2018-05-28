import React,{ Component } from 'react';
import './style/index.less';

export default class Icon extends Component{
    constructor (props){
        super(props);
    }

    render() {
        const { type } = this.props;
        const size = this.props.size ? this.props.size : 'mid';
        const iconType = type ? `mb-icon-${size} icon-${type}` : null;

        return (
            <i className={iconType}></i>
        )
    }
}