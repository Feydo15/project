const state = [ 'Take Five', 'Claire de Lune', 'Respect' ];

const addNewSong = {
    type : 'songs/addSong',
    payload : 'Halo'
  };

  const removeSong = {
    type : 'songs/removeSong',
    payload : 'Take Five'
  };

  const removeAll = {
    type : 'songs/removeAll'
  };

  const reducer = (state = initialState, action) => {
    switch (action.type){
      case 'songs/addSong' : {
        return [...state, action.payload];
      }
      case 'songs/removeSong': {
      const newState = state.filter( val => val !== action.payload )
      return newState
      } 
      case 'songs/removeAll' : {
        return [];
      } 
      default : {
        return state;
      }
    }
    }
    
    
    
    // const initialState = [ 'Take Five', 'Claire de Lune', 'Respect' ];



// <****************************************************************************************>

//  import { createStore } from 'redux';
// 
// const increment = () => {
  // return { type: 'increment' }
// }
// 
// const decrement = () => {
  // return { type: 'decrement' }
// }
// 
// const initialState = 0;
// const countReducer = (state = initialState, action) => {
  // switch (action.type) {
    // case 'increment':
      // return state + 1;
    // case 'decrement':
      // return state - 1;
    // default:
      // return state;
  // }
// }
// 
// const store = createStore(countReducer);
// 
// Define your change listener function here.
// const printCountStatus = () => {
  // console.log(`The count is ${store.getState()}`);
// }
// store.subscribe(printCountStatus);
// store.dispatch(decrement()); // store.getState() === -1
// store.dispatch(increment()); // store.getState() === 0
// store.dispatch(increment()); // store.getState() === 1
// 
// ******************************************************************************************************

/* Note to learners: 
Normally, you would import redux like this:

  import { createStore } from 'redux';

Due to Codecademy's technical limitations 
for testing this exercise, we are using 
`require()`.
*/
// const { createStore } = require('redux');
// 
// Action Creators
// function increment() { 
  // return {type: 'increment'}
// }
// 
// function decrement() { 
  // return {type: 'decrement'}
// }
// 
// Reducer / Store
// const initialState = 0;
// const countReducer = (state = initialState, action) => {
  // switch (action.type) {
    // case 'increment':
      // return state + 1; 
    // case 'decrement':
      // return state - 1; 
    // default:
      // return state;
  // }
// };  
// const store = createStore(countReducer);
// 
// HTML Elements
// const counterElement = document.getElementById('counter');
// const incrementer = document.getElementById('incrementer');
// const decrementer = document.getElementById('decrementer');
// 
// Store State Change Listener
// const render = () => {
//  counterElement.innerHTML = store.getState(); 
// }
// render();
// store.subscribe(render)
// 
// 
// DOM Event Handlers
// const incrementerClicked = () => {
  // store.dispatch(increment())
// }
// incrementer.addEventListener('click', incrementerClicked);
//  
// const decrementerClicked = () => {
  // store.dispatch(decrement())
// }
// decrementer.addEventListener('click', decrementerClicked);
// 

// *************************************************************************************************

// import React from 'react';
// import ReactDOM from 'react-dom';
// import { createStore } from 'redux';
// 
// REDUX CODE
/////////////////////////////////
// 
// const toggle = () => {
  // return {type: 'toggle'} 
// }
//  
// const initialState = 'off';
// const lightSwitchReducer = (state = initialState, action) => {
  // switch (action.type) {
    // case 'toggle':
      // return state === 'on' ? 'off' : 'on';
    // default:
      // return state; 
  // }
// } 
//  
// const store = createStore(lightSwitchReducer);
// 
// REACT CODE
/////////////////////////////////
//  
// Pass the store's current state as a prop to the LightSwitch component.
// const render = () => {
  // ReactDOM.render(
    // <LightSwitch 
      // state={store.getState()}
    // />,
    // document.getElementById('root')
  // )
// }
//  
// render(); // Execute once to render with the initial state.
// store.subscribe(render); // Re-render in response to state changes.
// 
// Receive the store's state as a prop.
// function LightSwitch(props) {
  // const state = props.state; 
// 
  // Adjust the UI based on the store's current state.
  // const bgColor = state === 'on' ? 'white' : 'black';
  // const textColor = state === 'on' ? 'black' : 'white';  
//  
  // The click handler dispatches an action to the store.
  // const handleLightSwitchClick = () => {
    // store.dispatch(toggle());
  // }
//  
  // return (  
    // <div style={{background : bgColor, color: textColor}}>
      {/* <button onClick={handleLightSwitchClick}> */}
        {/* {state} */}
      {/* </button> */}
    {/* </div> */}
  // )
// }
//  

// ************************************************************************************************

import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// REDUX CODE
///////////////////////////////////

const increment = () => {
  return {type: 'increment'} 
}

const decrement = () => { 
  return {type: 'decrement'}
}

const initialState = 0;
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    default:
      return state; 
  }
} 

const store = createStore(counterReducer);

// REACT CODE
///////////////////////////////////

const render = () => {
  ReactDOM.render(
    <CounterApp 
      state={store.getState()}
    />,
    document.getElementById('root')
  )
}
render();
store.subscribe(render);

function CounterApp(props) {
  
  const state = props.state;

  const onIncrementButtonClicked = () => {
    store.dispatch(increment());
  }
 
  const onDecrementButtonClicked = () => {
    store.dispatch(decrement());
  }
  
  return (   
    <div>
      <h1> {state} </h1>
      <button onClick={onIncrementButtonClicked}>+</button> 
      <button onClick={onDecrementButtonClicked}>-</button>
    </div>
  )
}
