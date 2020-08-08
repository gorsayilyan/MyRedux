import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, signin } from "./actions"


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);  
  const dispatch = useDispatch();
  return (
    <div className="App">

     <h1>Counter {counter} </h1>
    <button onClick={()=>dispatch(increment(5))}>+</button>
    <button onClick={()=>dispatch(decrement(5))}>-</button>
    <br/>
    <button onClick={()=>dispatch(signin())}>SignIn</button>
     {isLogged?<h3>Valuable Information I shouldnt see</h3>:""}
     
    </div>
  );
}

export default App;



// import {createStore} from "redux"

// //STORE => GLOBALIZED STATE

// //ACTION INCREMENT
// const increment = () =>{
//     return{
//         type: "INCREMENT"
//     }
// }

// const decrement = () =>{
//     return{
//         type: "DECREMENT"
//     }
// }

// //REDUCER
// const counter = (state=0, action) =>{
//     switch(action.type){
//         case "INCREMENT":
//             return state+1;
//         case "DECREMENT":
//             return state-1;
//     }
// }

// let store = createStore(counter);

// //Display it in the console
// store.subscribe(()=>console.log(store.getState()));

// //DISPATCH
// store.dispatch(increment())
// store.dispatch(decrement())
// store.dispatch(decrement())

// ReactDOM.render(<App />, document.getElementById('root'));