import React from "react";
import style from "./Users.module.css"

export const Users = (props) => {
  // debugger
  if (props.users.length === 0) {props.setUsers(
    
    [
      { id: '1', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU', followed: false, fullName: 'Aleksey', status: 'I am boss', location: {city: 'Minsk', country: 'Belarus'} },
      { id: '2', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU', followed: true, fullName: 'Ivan', status: 'I am student', location: {city: 'Moscow', country: 'Russia'} },
      { id: '3', photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsZwjA0i1NnKN2XckBnoxA0wm2Y-9JxuyKVg&usqp=CAU', followed: false, fullName: 'Elisey', status: 'I am student', location: {city: 'Brussels', country: 'Belgium'} },
    ],
  )
  }
  return (
    <div>
      { 
      props.users.map(us => <div key={us.id}>
        <span>
          <div><img src={us.photoUrl} className={style.img}/></div>
          <div>
            {us.followed ? <button onClick = {() => {props.unfollow(us.id)}}>Unfollow</button> : 
                           <button onClick = {() => {props.follow(us.id)}}>Follow</button>}
          </div>
        </span> 
        <span> 
          <span>
            <div>{us.fullName}</div>
            <div>{us.status}</div>
          </span>
          <span>
            <div>{us.location.country}</div>
            <div>{us.location.city}</div>
          </span>         
        </span>  
      </div>)    
      }
    </div>
  );
};
