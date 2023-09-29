import{useState , useEffect } from 'react';

export default function stateEffectDemo(){
    const [stateVar1 , setStateVar1] = useState(0);
   
 

    useEffect(()=>{console.log('UseEffect')}, [stateVar1]);
    return(
        <>
        <p>The value of stateVar1 is : {stateVar1}</p>
        <button onClick ={ ()=>{setStateVar1(stateVar1+1)}}>Increase value of stateVar1</button>
        </>
    );

}