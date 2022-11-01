import React, { useState } from "react";
import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

//.. - To go up two folders, so first in users, then in components, and then /ui and then /card. So you can import it

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");

  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} /> }
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;

//<form onSubmit={}> - To specify a function that should be executed when that form is submited

// event.preventDefault(); - To prevent that default which for the submition event is that a request is sent, i dont want that default so i prevented it (when i click on a page add user page is not reloading)

// addUserHandler - Is triggered when the form is submited, to collect values we use hook {useState}, to update the state and save what the user enters in state variable which is managed in react. The first element of array is current state snapshot, and second element is a function we can call and change that state

// const usernameChangeHandler - With keystoke in the input element we trigger this function
// setEnteredUsername(event.target.value) - Set to what the user entered and get value

// setEnteredUsername(""); setEnteredAge(""); - If we set this to an empty string and down in input add value  value={enteredUsername}, value={enteredAge},  when we enter something in fields and click add user it's cleared

// if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) - If entered username trimmed is empty, or (||) if entered age us empty

// if (+enteredAge < 1) - If entered age is smaller than one (0, -1, -2...),  and + before means that we change string to a number

// We forward props.onAddUser(enteredUsername, enteredAge); two pieces of data which we got stored in this AddUser component, and we are forwarding that entered data to the App component on every click on Add User button

// We must wrap <ErrorModal /> in a <div></div> because react doesen't allow two side by side components being rendered directly
