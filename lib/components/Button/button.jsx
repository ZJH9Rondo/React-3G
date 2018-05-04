import React,{ Component } from 'react';
import Icon from '../Icon/index.jsx';
import classNames from 'classnames';
require('./style/index.less');

export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'success',
            size: 'mid',
            shape: 'default',
            icon: 'null',
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            type: this.props.type || 'success',
            size: this.props.size || 'mid',
            shape: this.props.shape || 'default',
            icon: this.props.icon || null,
            loading: this.props.loading || false
        });
    }

    render() {
        const { type,shape,size,icon,loading } = this.state;
        const buttonClass = classNames({
            [`mb-${size}`]: size,
            [`mb-${type}`]: type,
            [`mb-${shape}`]: shape
        });
        const iconType = loading ? 'loading' : icon;
        const mbIcon = iconType ? <Icon type={iconType} /> : null;
        return (
            <div>
                <button className={buttonClass}>{mbIcon}{this.props.children}</button>
            </div>
        )
    }
}