import React, {useState, useEffect} from 'react';
import './chatpage.css';
import Chat from '../../comps/Chat';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import Input from '../../comps/Input';
import {TiContacts} from 'react-icons/ti';
import {AiFillSmile} from 'react-icons/ai';
import {FaFacebookMessenger} from 'react-icons/fa';

/*
var welcome= "welcome to my App!"
function setWelcome() {
    welcome = "Start with sending a message.";
    document.querySelector("#welcome").innerText = welcome;
}
*/

//Using {useState} is to organize stuff and easily change things later
//You can send and receive those information and reuse it for your other components
//Customizing

const ChatPage = ({}) => {
const [welcome, setWelcome] = useState("Welcome to my App!");
const [msg, setMsg] = useState("Pls type something!");
const [resp, setResp] = useState("Let me respond to you!");
const [color, setColor] = useState("#DAB");
const [text, setText] = useState("Click me to see your favorite color!");
//const [state, function] = useState("default value");

useEffect(()=> {
    setTimeout(()=>{
    document.querySelector("#chatpage").style.left = 0;
}, 50)
}, []);

return <div id="chatpage">
    <div id="welcome">
        <Header fontSize={32} text={welcome} />
    </div>
    <div id="chats" onClick={()=>{
        //onClick={()=>{}} === onClick function
        setWelcome("Start with sending a message.");
        //changing the state//
    }}>
        <Chat name={"User 1"} msg={msg}/>
        <p />
        <Chat img={"https://www.sensov.com/wp-content/uploads/2018/11/bot.jpg"}name={"Chat Bot"} backgroundColor={"#FAB"} msg={resp}/>
    </div>
    <div id="controls">
    <TiContacts color="#D02" />
    <AiFillSmile color="#C90" />
    <FaFacebookMessenger color="#CE8" />
        <Input onClick={(val)=>{
            setMsg(val);
            var new_resp = CheckResponse(val);
            setResp(new_resp);
            /*
            if(val === "hi") {
                setResp("I love Pie");
            }
            */
        }}/>
    </div>
    <div id="color_button">
    <CustomButton text={text} color={color}
    onClick={()=>{
        setColor("#ACA");
        setText("Your favorite color is GREEN!");
    }}/>
</div>
</div>
}

function CheckResponse(inp){
    switch(inp.toLowerCase()){
        case "hi":
            return "I love pie";
        case "how are you?":
            return "great!";
        default:
            return "I don't understand what you are trying to say";
    }
}
ChatPage.defaultProps = {

}

export default ChatPage