import React, { useEffect } from 'react';

export default function Comments ({ comments, propsconsole, propsname }){

    useEffect(() => {
        console.log(`${propsconsole} ${propsname}`);
    });

    return (
        <div className="comments text-capitalize">
            {comments}
        </div>
    )
}