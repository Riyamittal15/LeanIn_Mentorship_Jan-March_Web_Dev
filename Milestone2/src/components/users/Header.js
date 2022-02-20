
//{<div className="total-expense">Rs{totalExpense}</div>}
import React from "react";
import classes from "./Header.module.css";

function Header( {totalExpense} ) {
    return (
        <header>
            <div className = {classes.bal}>
                <h1>Expense Tracker App</h1>
            </div>
            <div className = {classes.Inc_Exp}>
                <div>
                    <h2>Expense</h2>
                    <div>Rs. {totalExpense}</div>
                </div>
            </div>
        </header>
    )
}
export default Header;