import React from 'react';
import './chat.css';
import Header from '../Header';
import { EventEmitter } from 'events';
//boiler plate #1 - import: You know you will import something

const defaultImg = require('./default.png');

const Chat = ({msg, img, name, backgroundColor}) => <div
style= {{backgroundColor:backgroundColor}}
className="chat_card">
    <div className="chat_user">
    <img src={img} />
    <Header fontSize="100%" text={name}/>
    </div>
    <div className="chat_msg">
        {msg}
    </div>
</div>;
//boiler plate #2 - <div/>: You know there is going be a default interface
//boiler plate #3 - ({}): There is a default configuration that is going to come in

Chat.defaultProps = {
    msg: "Please type something!",
    img: defaultImg,
    backgroundColor: "#EEE",
    name: "Username"
}
//boiler plate #4 - Chat.defaultProps: You know there would be a default setting for your configuration

export default Chat;
//boiler plate #5 - export: You know you are gonna export your component