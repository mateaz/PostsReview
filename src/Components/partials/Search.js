import React from 'react';
import PropTypes from 'prop-types';

export default class Search extends React.Component {

    componentDidMount () {
        console.log(`${this.props.propsconsole} ${this.props.propsname}`);
    };
    
    render () {
        return (
            <form id="search-box">
                <div className="search-box-div">
                    <input 
                        value={this.props.value} onChange={this.props.onChange}
                        type='text'
                        />
                    <label>Search by username</label>
                </div>
            </form>
    )
}};

Search.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string, 
};