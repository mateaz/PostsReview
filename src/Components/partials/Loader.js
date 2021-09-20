import React from 'react';

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