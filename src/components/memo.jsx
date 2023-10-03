import {useEffect , useMemo} from 'react';
export default function IntenseCalc(props){ 
    useEffect(()=>{console.log("I think I am rerendered")});
    
    let ans = useMemo(()=> {for(let i=0; i<9 ; i++){console.log(i);}} , []) ;  
    return (        
    <>    
    <p>Calculated answer is : {ans} </p>
    </>);
}