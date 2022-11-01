import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';



const UsersList = (props) => {
  return (
    <Card className={classes.users}>
    <ul>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} ({user.age} years old)
        </li>
      ))}
    </ul>
    </Card>
  );
};

export default UsersList;

// map method to map array of users to an array of jsx elements. So map executes a function on every item in users array and we get that item as an input
