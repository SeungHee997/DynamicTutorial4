import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, fontWeight}) => <div
style={{fontSize, color, fontWeight}}
className="Header_custom"
>
    <h1 style={{fontSize:fontSize}}>
        {text}
    </h1>
</div>



Header.defaultProps = {
    fontSize: 12,
    color: "rebeccapurple",
    fontWeight: "bolder",
    text: "Header"
}

export default Header;