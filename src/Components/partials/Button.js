import React from 'react';
import PropTypes from 'prop-types';

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

Button.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string,
    handleOnClickButton: PropTypes.func,
    class: PropTypes.string,
    childrenText: PropTypes.object,
    childrenSvg: PropTypes.object,
};