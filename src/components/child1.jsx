import { useContext } from "react";
 import {contextDemo} from '../App.jsx';
 import Button from './child2.jsx'; 
export default function Child1(){
    const {count} = useContext(contextDemo);
    return (
        <>
        <p>Inside Child1</p>
        Passed value is <br>
        </br>
        {count}
        <br></br>
        Inside Child2
        <Button/>
        Child2 Completed
        <p>Child1 Completed</p>
        </>
    );

}