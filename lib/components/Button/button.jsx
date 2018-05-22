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
            icon: 'null',
            loading: false
        };
    }

    componentDidMount() {
        this.setState({
            type: this.props.type || 'success',
            size: this.props.size || 'mid',
            icon: this.props.icon || null,
            loading: this.props.loading || false
        });
    }

    render() {
        const { type,shape,size,icon,loading } = this.state;
        const buttonClass = classNames({
            [`mb-btn-${size}`]: size,
            [`mb-btn-${type}`]: type,
        });
        const iconType = loading ? 'loading' : `${icon}`;
        const disabled = (type == "disabled") ? "disabled" : null;
        const mbIcon = icon ? <Icon type={ iconType } size={ size }/> : null; 
        /**
         * event 参数捕获
        */
        const onClick = this.props.onClick ? this.props.onClick : null;

        return (
            <div>
                <button className={ buttonClass } onClick = { onClick } disabled={ disabled }>{ mbIcon }{ this.props.children }</button>
            </div>
        )
    }
}