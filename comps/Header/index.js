import React from 'react';
import './header.css';

const Header = ({fontSize, color, fontWeight, onMouseOver}) => <div
style={{fontSize, color, fontWeight}}
className="Header_custom"
onMouseOver={onMouseOver}
>
    <h1>Header</h1>
</div>

function MouseOver() {
    alert("mouse is over");
}

Header.defaultProps = {
    fontSize: 12,
    color: "rebeccapurple",
    fontWeight: "bolder",
    onMouseOver: MouseOver
}

export default Header;