import React,{ Component } from 'react';
import PropTypes from 'prop-types';

import './style/index.less';

export default class Checkbox extends Component{
    static propTypes = {
        disabled: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        text: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.object
        ]),
        onChange: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.object
        ])
    };

    /**
     * props 默认值
     */
    static defaultProps = {
        disabled: null,
        text: null,
        onChange: null
    };
    
    constructor(props) {
        super(props);
    }

    render() {
        const { disabled, text, onChange } = this.props;
        const checkboxText = text ? <span className="mb-checkbox-text">{text}</span> : null;
        /**
         * eventHandel 处理
        */
        const changeHandel = onChange ;

        return (
            <label className="mb-checkbox-ctn">
                <span className="mb-checkbox-box">
                    <input className="mb-checkbox" type="checkbox" onChange={ changeHandel } disabled={ disabled }></input>
                </span>
                {checkboxText}
            </label>
        )
    }
}