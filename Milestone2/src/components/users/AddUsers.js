import Card from "../UI/Card";
import Button from "./Button";
import classes from "./AddUsers.module.css";
import { useState } from "react";
import ErrorModal from './ErrorModal';

const AddUsers = (props) => {
  const [enteredText, setEnteredText] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");
  const[error,setError]=useState();

  const addDataHandler = (event) => {
    event.preventDefault();

    if (enteredText.trim().length === 0 || enteredPrice.trim().length === 0 || enteredDate.trim().length === 0) {
      setError({title:"error ",message:"enter valid inputs"})
      return;
    }

    if (+enteredPrice < 0) {
      setError({title:"error",message:"enter valid price"})
      return;
    }

    // console.log(enteredUser);
    // console.log(enteredAge);
    props.onAddUser(enteredText, enteredPrice, enteredDate);
    setEnteredText("");
    setEnteredPrice("");
    setEnteredDate("");
  };
 
  const textHandler = (event) => {
    setEnteredText(event.target.value);
  };
  const priceHandler = (event) => {
    setEnteredPrice(event.target.value);
  };
  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const onConfirm=()=>{
    setError(null);
}

  return (
      <>
    {error&&(<ErrorModal title={error.title} message={error.message} onConfirm={onConfirm}/>)}
    <Card>
      <form onSubmit={addDataHandler}>
        <div className={classes.user_details}>
          <div className={classes.input_box}>
            <label htmlFor="text">Expense Details</label>
            <input
              type="text"
              id="text"
              onChange={textHandler}
              value={enteredText}
              autoComplete="off"
            ></input>
          </div>
          <div className={classes.input_box}>
            <label htmlFor="price">Expense</label>
            <input
              type="number"
              id="number"
              onChange={priceHandler}
              value={enteredPrice}
              autoComplete="off"
            ></input>
          </div>
          <div className={classes.input_box}>
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              onChange={dateHandler}
              value={enteredDate}
              autoComplete="off"
            ></input>
          </div>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </Card>
    </>
  );
};

export default AddUsers;