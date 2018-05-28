import React,{ Component } from 'react';

import './style/index.less';

export default class Checkbox extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="mb-checkbox-ctn">
                <label>
                    <input className="mb-checkbox" type="checkbox"></input>
                    复选框
                </label>
            </div>
        )
    }
}