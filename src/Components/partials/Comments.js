import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

export default function Comments ({ comments, propsconsole, propsname }){

    useEffect(() => {
        console.log(`${propsconsole} ${propsname}`);
    });

    return (
        <div className="comments text-capitalize">
            {comments}
        </div>
    )
};

Comments.propTypes={
    propsconsole: PropTypes.string, 
    propsname: PropTypes.string, 
    comments: PropTypes.any
};