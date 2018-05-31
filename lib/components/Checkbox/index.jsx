import React,{ Component } from 'react';

import './style/index.less';

export default class Checkbox extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        const { disabled, text, onChange } = this.props;
 
        const disCheckbox = disabled ? 'disabled' : null;
        const checkboxText = text ? <span className="mb-checkbox-text">{text}</span> : null;
        /**
         * 处理 checkbox 的 event事件
         */
        const checkboxChange = onChange ? onChange : null;

        return (
            <label className="mb-checkbox-ctn">
                <span className="mb-checkbox-box">
                    <input className="mb-checkbox" type="checkbox" onChange={checkboxChange} disabled={disCheckbox}></input>
                </span>
                {checkboxText}
            </label>
        )
    }
}