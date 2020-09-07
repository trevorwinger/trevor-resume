import React from 'react';

const Body = ({selectedColor, listOfThings}) =>
{
    const style = {
        color:selectedColor, 
        textAlign:'left',
    }
    return(
        <div>
            <ul style={style}>
                {
                    listOfThings.map((things => <li style={{color:selectedColor}}>{things}</li>))
                }
            </ul>
        </div>
    )
} 

export default Body;