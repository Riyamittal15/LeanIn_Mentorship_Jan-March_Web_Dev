import React,{ useState } from 'react';
import AddUser from "./components/AddUser";
import UserList from './components/UserList';


function App() {
  const [usersList,setUsersList]=useState([]);

  const onAddUserHandler=(userName, userPhn)=>{
    setUsersList((prevState)=>{
      return[...prevState,{name:userName, phn:userPhn}]}
    )
  }
  return (
    <div>
      <AddUser onAddUser={onAddUserHandler} />
      <UserList list={usersList}/>
    </div>
  );
}
 
export default App;
