import React, {useState} from 'react';
import './input.css';
import CustomButton from '../CustomButton';

//boiler plate #1 - import: You know you will import something

const Input = ({placeholder, onClick}) => {
 const [val, setVal] = useState("");

return <div classname="input_cont">
    <input onChange={(e)=>{
        setVal(e.target.value);
    }} type='text' placeholder={placeholder} />
    <CustomButton onClick={()=>{
        onClick(val);
    }} text="send" color="#58F" />
</div>;
}
//boiler plate #2 - <div/>: You know there is going be a default interface
//boiler plate #3 - {}: There is a default configuration that is going to come in

Input.defaultProps = {
    placeholder: "Type your chat here!",
    onClick:()=>{}
}
//boiler plate #4 - Input.defaultProps: You know there would be a default setting for your configuration

export default Input;
//boiler plate #5 - export: You know you are gonna export your component