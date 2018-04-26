import React,{ Component } from 'react';
import classNames from 'classnames';
require('./style/index.less');

export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'mb-btn-normal',
            size: 'mb-btn-mid',
            shape: 'mb-btn-default',
            icon: 'mb-btn-null'
        };
    }

    componentWillMount() {
        this.setState({
            type: this.props.type || 'mb-btn-normal',
            size: this.props.size || 'mb-btn-mid',
            shape: this.props.shape || 'mb-btn-default',
            icon: this.props.icon || 'mb-btn-null'
        });
    }

    render() {
        const {type,shape,size,icon} = this.state;
        console.log(type);
        const buttonClass = classNames({
            [`${size}`]: size,
            [`${type}`]: type,
            [`${shape}`]: shape,
            [`${icon}`]: icon
        });
        return (
            <div>
                <button className={buttonClass}>点击</button>
            </div>
        )
    }
}