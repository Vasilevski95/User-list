import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';



function App() {
  const [usersList, setUsersList] = useState ([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
        return [...prevUsersList, {name: uName, age: uAge, id: Math.random().toString()}];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      <UsersList users={usersList}/>
    </div>
  );
}

export default App;

// We need to add users={[]} to this component, we need to set that users prop because if users prop is not defined in component here, its undefined

// {[usersList]} - is what you want to forward to this UsersList component, at first it's an empty array, but the function setUsersList changes that empty array, and that change would trigger App function to be rerendered and the UsersList component would be updated as well

// onAddUser - Is a prop, but the name is like an event because it behaves like an event. When the button is clicked, then a function addUserHandler which we pass to onAddUser should be triggered.

// setUsersList() - We call setUsersList(); and then update a state

// We want to update a state by taking the old list and append a new element to it. When your state update relies on the previous state we use alternative form of setUsersList, we pass a function, and that function takes previos state snapshot (prevUsersList), and then you return a new state snapshot in the body of this function you pass to setUsersList. So you return new array [...prevUsersList] where you copy all elements from prevUsersList
// ---> prethodno - And thats the spread operator which pulls all elements out of that array and adds them as new elements to this new array, and we add a new element {ime, godine, id}
