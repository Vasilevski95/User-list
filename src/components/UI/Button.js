import React from "react";

import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || "button"}
      onClick={props.onClick}
    >
        {props.children}
    </button>
  );
};

export default Button;

// type={props.type} || 'button'  -  Type of the button is set from the outside from the place we use custom button component. So the value assigned to the built in button component will be dynamic and we access props.type and if not we set or || and alternative as 'button'

//  || - Or

// onClick={props.onClick} - Name is up to me, but we want it to be usable like the built in button, and we use same naming, and any function we receive there is just passed onte the built in button component through onClick prop

// {props.children} - We use this to output some content between the button tags, and we expect to get that content between the tags of button ( <button>...</button> ) so we use {props.children}