import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Icon from '../Icon/index.jsx';

import './style/index.less';

export default class Input extends Component {
    static defaultProps = {
        type: 'text',
        size: 'mb-input-mid',
        placeholder: '',
        addonPre: null,
        onChange: null,
        onBlur: null,
        onFocus: null
    }

    static propTypes = {
        type: PropTypes.string,
        size: PropTypes.string,
        placeholder: PropTypes.string,
        addonPre: PropTypes.object,
        onChange: PropTypes.func,
        onBlur: PropTypes.func,
        onFocus: PropTypes.func
    }

    filedChangeHandel = (e) => {
        const { handelFieldChange, name } = this.props;

        /**
         * 合并管理　Form 组件内的　Input 与　单独的　Input 的事件
        */
        if(this.onChange){
            this.onChange(e);
        }

        if(handelFieldChange && name){
            handelFieldChange(name, e.target.value);        
        }
    }

    constructor (props) {
        super(props);

        /**
         * 将传入　Input 组件的默认　change　事件做为内部状态保留引用
        */
        this.onChange = this.props.onChange;
    }

    render() {
        const { type, size, placeholder, addonPre } = this.props;

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
         * input 内嵌Icon
        */
        const prefix = this.props.prefix ? <span className="mb-input-prefix">{ this.props.prefix }</span> : null; 

        return (
            <div className='mb-input-container'>
                { inputPre }
                { prefix }
                <input className = { inputClass } type = { type } onChange = { this.filedChangeHandel } placeholder={ placeholder }>
                </input>
            </div>
        )
    }
}