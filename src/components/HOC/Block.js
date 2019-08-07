import React from 'react';
const Block = (props) => {
    return (
        <div className="block__wrapper" >
            {props.children}
        </div>
    )
}

export default Block;
