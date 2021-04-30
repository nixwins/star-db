import React from 'react';

const Row = ({ lItem, rItem }) => {
    return (
        <div className="row mb2">
            <div className="md-6">
                {lItem}
            </div>
            <div className="md-6">
                {rItem}
            </div>
        </div>
    )
}

export default Row;