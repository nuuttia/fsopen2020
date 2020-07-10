import React from 'react'

const Filter = ({ hfc, newFilter }) => {
    return(
    <form>
        <div>
            filter shown with
             <input
                value={newFilter}
                onChange={hfc}
            />
        </div>
    </form>
    )
}

export default Filter