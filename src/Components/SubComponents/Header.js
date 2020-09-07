import React from 'react';

const Header = ({selectedColor, headerText}) => {

    const style = {
        color:selectedColor,
        textAlign:'left',
    }
    return(
        <div>
            <h2 style={style}>{headerText}</h2>
        </div>
    )
}

export default Header;