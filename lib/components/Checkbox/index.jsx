import React,{ Component } from 'react';

import './style/index.less';

export default class Checkbox extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label className="mb-checkbox-ctn">
                <span className="mb-checkbox-box">
                    <input className="mb-checkbox" type="checkbox"></input>
                </span>
                <span className="mb-checkbox-text">复选框</span>
            </label>
        )
    }
}