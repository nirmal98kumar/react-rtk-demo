import React from "react";
import { useSelector ,useDispatch} from "react-redux";
import { ordered,restocked } from "./cakeSlice";

export function CakeView (){

    /*
        state - redux store that contains reducers  // store.js
        cake - cakeReducer is referred to as cake
        numOfCakes - CakeSlice.js
    */
    const numOfCakes = useSelector((state) => state.cake.numOfCakes)
    const dispatch = useDispatch( )

    return (
        <div>
            <h2>No of cakes - {numOfCakes}</h2>
            <button onClick={()=>dispatch(ordered())}>Order</button>
            <button onClick={()=>dispatch(restocked(1))}>Restock</button>
        </div>
    )
}