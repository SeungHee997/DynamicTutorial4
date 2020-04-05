import React from 'react';
import CustomButton from '../comps/CustomButton';
import Header from '../comps/Header';

export default {
    title: "Custom Button",
    component:CustomButton
};

export const MyCustomButton = () => <CustomButton />;

export const MyHeader = () => <Header />;

export const PageWithCustomButtons = () => <div>
    <Header
    fontSize={15}
    color="#ABC"
    onMouseOver={LoveOver}
    fontWeight="normal"/>
    <Header
    fontSize={25}
    color="#DDA"
    onMouseOver={LikeOver}
    fontWeight="bold"/>
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

function CancelClick() {
    alert("cancel");
}

function okClick() {
    alert("OK");
}