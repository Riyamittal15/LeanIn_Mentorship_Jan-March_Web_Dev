import AddUsers from "./components/users/AddUsers";
import UsersList from "./components/users/UsersList";
import { useEffect, useState } from "react";
import Header from './components/users/Header';
import {filterItems} from "./components/users/Filter";
import SearchBar from "./components/users/SearchBar";
function App() {
  const [userList, setUserList] = useState([]);
  const [totalExpense, setTotalExpense] = useState(0);
  const[query,setQuery]=useState("");
  const results= filterItems(userList,query);

  useEffect(() => {
    let temp=0;
    for(let i=0;i<userList.length;i++)
      temp+=parseInt(userList[i].price);

      setTotalExpense(temp);
  },[userList]
  );

  const addUserHandler = (text , price , date) => {
    let arr= date.split("-");

    let yr = arr[0];
    let month = arr[1];
    let day = arr[2];
    
    setUserList((prevState) => {
      return [
        ...prevState,
        { text:text , price:price, yr:yr, month:month , day:day , id: Math.random().toString() },
      ];
    });
  };
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  

  return (
    <>
    <Header totalExpense={totalExpense}/>
      <AddUsers onAddUser={addUserHandler} />
      <SearchBar query={query} onChange={handleChange}/>
      <UsersList list={query === "" ? userList : results} />
    </>
  );
}

export default App;