import React from 'react';
import Header from './SubComponents/Header';
import Body from './SubComponents/Body';

const Section = ({header, bodyText}) => {

    function select_color()
    {
        const colors = ['#ff79c6', '#bd93f9', '#8be9fd', '#ffb86c', '#50fa7b'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    const color = select_color();
    
    return (
        <div>
            <Header selectedColor={color} headerText={header} />
            <Body selectedColor={color} listOfThings={bodyText} />
        </div>
    )
}

export default Section;