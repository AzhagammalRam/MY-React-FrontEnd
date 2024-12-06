import React, { useReducer } from 'react'

const initialState = {totaltoys:0, toysSold:0}

function toysStoreReducer(state,action){
    switch(action.type){
        case'BUY':
            return{...state, totaltoys: state.totaltoys+1}

        case'RETURN':
            return{...state, toysSold:state.toysSold+1, totaltoys: state.totaltoys-1}

        default:
            return state;
    }

}

function Reducer() {
    const[storeState, dispatch] = useReducer(toysStoreReducer,initialState);

    const handledBuyClick = () =>{
        dispatch({type:'BUY'});
    }

    const handledSoldClick = () =>{
        dispatch({type:'RETURN'});
    }
  return (
    <>
    <h1>Reducer</h1>
    <p>Total Toys in Store : {storeState.totaltoys}</p>
    <p>Toys Sold: {storeState.toysSold}</p>
    <button onClick={handledBuyClick}>Buy Toy</button>
     {/* <button onClick={handledSoldClick}>Return Toy</button>  */}
     {storeState.totaltoys ? <button onClick={handledSoldClick}>Return Toy</button>  : <p>Toys Not Available in Store</p> }
    </>
  )
}

export default Reducer
