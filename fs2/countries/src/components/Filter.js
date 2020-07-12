import React from 'react'

const Filter = ({ handler, filter }) => {
    return(
    <form>
        <div>
            find countries
             <input
                value={filter}
                onChange={handler}
            />
        </div>
    </form>
    )
}

export default Filter