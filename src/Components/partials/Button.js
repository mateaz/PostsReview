import React from 'react';

export default class Button extends React.Component {

    componentDidMount () {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);
    };

    render() {

        return (
            <button onClick = {this.props.handleOnClickButton} className={this.props.class}> {this.props.childrenText} {this.props.childrenSvg}</button>
        )
    };
};