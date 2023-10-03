import {useContext} from 'react';
import {contextDemo} from '../App.jsx';

export default function Child2(){
    const { count , setCount} = useContext(contextDemo);

    return(
        <>
        <button onClick = {()=> setCount(count+1)}>Increase passed Value </button>
        </>
    );
}