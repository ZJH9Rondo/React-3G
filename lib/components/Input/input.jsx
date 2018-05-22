import React,{ Component } from 'react';
import classNames from 'classnames';
import Icon from '../Icon/index.jsx';

require('./style/index.less');

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state={
            size: 'mb-input-mid',
            placeholder: '',
            addonPre: null
        };
    }

    componentWillMount() {
        this.setState({
            size: this.props.size || 'mb-input-mid',
            placeholder: this.props.placeholder || '',
            addonPre: this.props.addonPre || null
        });
    }

    render() {
        const { size, placeholder, addonPre } = this.state;
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
                onChange = { onChange }
                onBlur = { onBlur }
                placeholder={ placeholder }></input>
            </div>
        )
    }
}