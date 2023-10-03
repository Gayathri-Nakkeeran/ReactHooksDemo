//  import {useState} from 'react';
export function useConsole(msg = "Hii"){
    // let Ret = "Gayu";
    // return Ret;
    // const{state , setState} = useState()
    
    const alert = ()=>{
       console.log(msg);
    };
    return [alert];
}