import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';
import Input from '../comps/Input';
import Chat from '../comps/Chat';
import ChatPage from '../pages/ChatPage';

export default {
    title: "My comps",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

function CancelClick() {
    alert("cancel");
}

export const MyCustomButtonWithOptions = () => <CustomButton
color="#999"
text="Cancel"
onClick={CancelClick}
/>;

export const MyHeader = () => <Header />;

export const MyInput = () => <Input />;

export const MyInputWithPlaceholder = () => <Input
placeholder="Custom placeholder"
/>;

export const MyChat = () => <Chat />;

export const MyChatPage = () => <ChatPage />;
/*
export const PageWithCustomButtons = () => <div>
    <Header
    text="Loves"
    fontSize={15}
    color="#ABC"
    onMouseOver={LoveOver}
    fontWeight="normal"/>
    <Header
    text="Likes"
    fontSize={17}
    color="#DDA"
    onMouseOver={LikeOver}
    fontWeight="bold"/>
    <Header
    text="Pride"
    fontSize={23}
    color="#ADC"
    onMouseOver={ProudOver}
    fontWeight="bolder"/>

    <CustomButton 
    color="#999"
    text="Cancel"
    onClick={CancelClick}/>
    <CustomButton
    color="#3F5"
    text="OK"
    onClick={okClick}/>
    <CustomButton 
    color="#F3F"
    text="Submit"/>
    <CustomButton
    text="Menu"/>
</div>

function LoveOver() {
    alert("I love you!");
}

function LikeOver() {
    alert("I like you!");
}

function ProudOver() {
    alert("I'm proud of you!")
}

function CancelClick() {
    alert("cancel");
}

function okClick() {
    alert("OK");
}
*/