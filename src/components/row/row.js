import React from 'react';

const Row = ({ left, right }) => {
    return (
        <div className="row mb2 d-flex">
            <div className="md-6">
                {left}
            </div>
            <div className="md-5">
                {right}
            </div>
        </div>
    )
}

export default Row;