import React,{ Component } from 'react';
import classNames from 'classnames';
require('./style/index.less');

export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'normal',
            size: 'mid',
            shape: 'default',
            icon: 'null'
        };
    }

    componentWillMount() {
        console.log(this.props);
        this.setState({
            type: this.props.type || 'normal',
            size: this.props.size || 'mid',
            shape: this.props.shape || 'default',
            icon: this.props.icon || 'null'
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