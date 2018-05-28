import React,{ Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/index.jsx';

import './style/index.less';

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state={
            type: 'text',
            size: 'mb-input-mid',
            placeholder: '',
            addonPre: null
        };
    }

    componentWillMount() {
        this.setState({
            type: this.props.type || this.state.props,
            size: this.props.size || this.state.size,
            placeholder: this.props.placeholder || this.state.placeholder,
            addonPre: this.props.addonPre || this.state.addonPre
        });
    }

    render() {
        const { type, size, placeholder, addonPre } = this.state;
        const inputState = classNames({
            [`mb-input-${size}`]: size,
        });
        const inputClass = 'mb-input ' + inputState;
        const inputPreClass = `mb-inputPre inputPre-${size}`;
        /**
         * input 输入框时候携带前缀默认值
         */
        const inputPre = addonPre ? <span className= {inputPreClass}>{ addonPre }</span> : null; 

        /**
         * event 事件处理
        */
        let { onChange, onBlur } = this.props;
        onChange = onChange ? onChange : null;
        onBlur = onBlur ? onBlur : null;
        
        /**
         * input 内嵌Icon
        */
        const prefix = this.props.prefix ? <span className="mb-input-prefix">{ this.props.prefix }</span> : null; 

        return (
            <div className='mb-input-container'>
                { inputPre }
                { prefix }
                <input className = { inputClass } 
                type = { type }
                onChange = { onChange }
                onBlur = { onBlur }
                placeholder={ placeholder }></input>
            </div>
        )
    }
}