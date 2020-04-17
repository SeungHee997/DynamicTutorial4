import React, {useState, useEffect} from 'react';
import Link from 'next/link';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './fun.css';
import {IoIosReturnLeft} from 'react-icons/io';
import {IoMdColorPalette} from 'react-icons/io';
import {IoIosColorWand} from 'react-icons/io';

const Fun = ({}) => {
useEffect(()=> {
    setTimeout(()=> {
    document.querySelector("#funpage").style.left = 0;
}, 30)
}, []);
const [color, setColor] = useState("#DAB");
const [text, setText] = useState("Click me to see my guess!");

return <div id="funpage">
    <div>
        <IoMdColorPalette color="#D2E" />
        <Header fontSize={21} text="Um..I can guess what color you like" />
    </div>
    
    <div id="color_button">
        <CustomButton text={text} color={color}
            onClick={() => {
                setColor("#ACA");
                setText("You like GREEN color!");
            }} />
        <IoIosColorWand color="#D8E" />
    </div>
    <Link href="../"><IoIosReturnLeft color="#000" /></Link>
    let me just return to previous page..
</div>
}




export default Fun