import React,{ Component } from 'react';
import Icon from '../Icon/index.jsx';
import classNames from 'classnames';

import './style/index.less';

export default class Button extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'success',
            size: 'mid',
            icon: 'null'
        };
    }

    componentDidMount() {
        this.setState({
            type: this.props.type || this.state.type,
            size: this.props.size || this.state.size,
            icon: this.props.icon || this.state.icon
        });
    }

    render() {
        const { type,shape,size,icon } = this.state;
        const buttonClass = classNames({
            [`mb-btn-${size}`]: size,
            [`mb-btn-${type}`]: type,
        });
        /**
         * button-status 是否为 loading ,由 icon 字段决定
        */
        const iconType = (icon == 'loading') ? 'loading' : `${icon}`;
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