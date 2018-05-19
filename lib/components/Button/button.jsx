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
            [`mb-btn-${size}`]: size,
            [`mb-btn-${type}`]: type,
            [`mb-btn-${shape}`]: shape
        });
        const iconType = loading ? 'loading' : `mb-icon-${size} icon-${icon}`;
        const mbIcon = icon ? <Icon type={ iconType } /> : null; 
        console.log(iconType);
        return (
            <div>
                <button className={ buttonClass }>{ mbIcon }{ this.props.children }</button>
            </div>
        )
    }
}