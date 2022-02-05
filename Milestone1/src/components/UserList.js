import React from "react";
import Card from "./Card";

const UserList=(props)=>{
    return(
            <Card>
                <ul>
                    {props.list.map((user)=>(
                        <li>
                            {user.name}-
                            {user.phn}
                        </li>
                    ))}
                </ul>
            </Card>
    );
}

export default UserList;