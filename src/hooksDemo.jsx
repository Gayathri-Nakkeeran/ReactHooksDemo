import{useState , useEffect } from 'react';

export default function StateEffectDemo(){
    const [stateVar1 , setStateVar1] = useState(0);
    const[stateVar2 , setStateVar2] = useState(5);
   
 

    useEffect(()=>{console.log('UseEffect')}, [stateVar1]);
    return(
        <>
        <p>The value of stateVar1 is : {stateVar1}</p>
        <p>The value of stateVar2 is : {stateVar2}</p>
        <button onClick ={ ()=>{setStateVar1(stateVar1+1)}}>Increase value of stateVar1</button>
        <button onClick = {()=> {setStateVar2(stateVar2+5)}}>Increase value of stateVar2</button>
        </>
    );

}