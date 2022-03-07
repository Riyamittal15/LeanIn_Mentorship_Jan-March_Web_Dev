import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [query, setquery] = useState("");
  const [nutrients, setnutrients] = useState({});

  
  const YOUR_APP_ID= "cee9b162";
  const YOUR_APP_KEY= "0b9f9d5e9311a223df58af00dfbb2481";

  const url = `https://api.edamam.com/api/nutrition-data?app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&nutrition-type=cooking&ingr=${query}`;

  const getNutriInfo = async () => {
    var result = await axios.get(url);
    //console.log(result.data);
    //setnutrients({health:result.data.healthLabels});
    setnutrients({n1:result.data.totalNutrientsKCal.CHOCDF_KCAL.label,
    n2:result.data.totalNutrientsKCal.CHOCDF_KCAL.quantity,
    n3:result.data.totalNutrientsKCal.CHOCDF_KCAL.unit,
    n4:result.data.totalNutrientsKCal.ENERC_KCAL.label,
    n5:result.data.totalNutrientsKCal.ENERC_KCAL.quantity,
    n6:result.data.totalNutrientsKCal.ENERC_KCAL.unit,
    n7:result.data.totalNutrientsKCal.FAT_KCAL.label,
    n8:result.data.totalNutrientsKCal.FAT_KCAL.quantity,
    n9:result.data.totalNutrientsKCal.FAT_KCAL.unit,
    n10:result.data.totalNutrientsKCal.PROCNT_KCAL.label,
    n11:result.data.totalNutrientsKCal.PROCNT_KCAL.quantity,
    n12:result.data.totalNutrientsKCal.PROCNT_KCAL.unit,
    n13:result.data.totalWeight});
    
    console.log(result.data);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    getNutriInfo();
  };

  return (
    <div className="app">
      <h1 onClick={getNutriInfo}>Food Nutrition</h1>
      <form className="app__searchForm" onSubmit={onSubmit}>
        <input
          className="app__input"
          type="text"
          placeholder="enter ingridient"
          autoComplete="Off"
          value={query}
          onChange={(e) => setquery(e.target.value)}
        />
        <input className="app__submit" type="submit" value="Search" />
      </form>

      {query&&<div className="app__recipes">
        
        <b><i>FOOD NUTRIENTS DESCRIPTION:</i></b><br></br>
        <p>
        {nutrients.n1}{" - "}
        {nutrients.n2}{" "}
        {nutrients.n3}
        <br></br>
        {nutrients.n4}{" - "}
        {nutrients.n5}{" "}
        {nutrients.n6}
        <br></br>
        {nutrients.n7}{" - "}
        {nutrients.n8}{" "}
        {nutrients.n9}
        <br></br>
        {nutrients.n10}{" - "}
        {nutrients.n11}{" "}
        {nutrients.n12}
        <br></br>
        Total Weight{" "}:{" "}{nutrients.n13}g
        </p>
      </div>}

    </div>
  );
}
 
export default App;
/*

      */