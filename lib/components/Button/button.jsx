import React,{ Component } from 'react';

export default class Button extends React.Component {
    constructor (props) {
        super();
    }

    componentWillMount() {
        console.log(this.props);
    }

    render() {
        return (
            <div>
                <button value="点击">点击</button>
            </div>
        )
    }
}