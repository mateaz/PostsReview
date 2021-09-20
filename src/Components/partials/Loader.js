import React from 'react';
import PropTypes from 'prop-types';

export default class Loader extends React.Component {

    componentDidMount () {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);
    };

    render() {

        return (
            <div className='loader'></div>
        )
    };
};

Loader.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string
};