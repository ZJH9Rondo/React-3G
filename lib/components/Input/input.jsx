import React,{ Component } from 'react';
import classNames from 'classnames';
require('./style/index.less');

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state={
            size: 'mb-input-mid',
            placeholder: '',
            defaultValue: null
        };
    }

    componentWillMount() {
        this.setState({
            size: this.props.size || 'mb-input-mid',
            placeholder: this.props.placeholder || '',
            defaultValue: this.props.defaultValue || null
        });
    }

    render() {
        const { size, placeholder, defaultValue } = this.state;
        const inputState = classNames({
            [`mb-input-${size}`]: size,
        });
        const inputClass = 'mb-input ' + inputState;
        const inputPreClass = `mb-inputPre inputPre-${size}`;
        /**
         * input 输入框时候携带前缀默认值
         */
        const inputPre = defaultValue ? <span className= {inputPreClass}>{ defaultValue }</span> : null; 

        return (
            <div>
                { inputPre }
                <input className={inputClass} placeholder={this.state.placeholder}></input>
            </div>
        )
    }
}