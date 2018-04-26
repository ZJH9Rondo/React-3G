import React,{ Component } from 'react';
import classNames from 'classnames';
require('./style/index.less');

export default class Input extends Component {
    constructor (props) {
        super(props);
        this.state={
            size: 'mb-input-mid',
            placeholder: ''
        };
    }

    componentWillMount() {
        console.log(this.props);
        this.setState({
            size: this.props.size || 'mb-input-mid',
            placeholder: this.props.placeholder || ''
        });
    }

    render() {
        const {size, placeholder} = this.state;
        const defaultClassName = 'mb-input ';
        console.log(this.state.placeholder);
        const inputClass = classNames({
            [`${size}`]: size,
        });

        console.log(defaultClassName);
        return (
            <div>
                <input className={defaultClassName+inputClass} placeholder={this.state.placeholder}></input>
            </div>
        )
    }
}