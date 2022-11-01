import React from "react";

import classes from './Card.module.css';


const Card = (props) => {
    return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;

// {props.children} - To output the content which this card is wrapped around. So when i wrap card around my form, so the card component should output what's passed between opening and closing tags of card. And you can access this content on the special children prop. And props children would give us that content which has passed between the opening and closing tag of the card component.

//  {` `} If you want to add classes from css file of that folder EXAMPLE: classes.card, but also if you want to add classes from a different folder, we need this approach and EXAMPLE: props.className. In this example we must use props.className because its applied in AddUser.js <Card className ...