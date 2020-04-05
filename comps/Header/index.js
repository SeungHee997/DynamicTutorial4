import React from 'react';
import './header.css';

const Header = ({text, fontSize, color, fontWeight, onMouseOver}) => <div
style={{fontSize, color, fontWeight}}
className="Header_custom"
onMouseOver={onMouseOver}
>
    <h1>
        {text}
    </h1>
</div>

function MouseOver() {
    alert("mouse is over");
}

Header.defaultProps = {
    text: "Header",
    fontSize: 12,
    color: "rebeccapurple",
    fontWeight: "bolder",
    onMouseOver: MouseOver
}

export default Header;