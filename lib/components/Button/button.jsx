import React,{ Component } from 'react';
import classNames from 'classnames';
require('./style/index.less');

export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'success',
            size: 'mid',
            shape: 'default',
            icon: 'null'
        };
    }

    componentDidMount() {
        this.setState({
            type: this.props.type || 'success',
            size: this.props.size || 'mid',
            shape: this.props.shape || 'default',
            icon: this.props.icon || 'null'
        });
    }

    render() {
        const {type,shape,size,icon} = this.state;
        console.log(type);
        const buttonClass = classNames({
            [`mb-btn-${size}`]: size,
            [`mb-btn-${type}`]: type,
            [`mb-btn-${shape}`]: shape,
            [`mb-btn-${icon}`]: icon
        });
        return (
            <div>
                <button className={buttonClass}>点击</button>
            </div>
        )
    }
}