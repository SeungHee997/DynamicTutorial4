import Link from 'next/link';
import Router from 'next/router';
import {FaSearchengin} from 'react-icons/fa';
import {GiEvilTree} from 'react-icons/gi';
import './index.css';
import './app.css';

function ClickIndex() {
    document.querySelector("#mainapp").style.left = "-100%";
    setTimeout(function(){
        Router.push("/ChatPage");
    }, 1000)
}

const Index = () => <div id="mainapp">
    <div onClick={ClickIndex}>Index</div>
    <FaSearchengin />
{/*
using <a href /> = go to another page => it reloads the entire page
~different~
using <link />  = Change UI interface, but still same page => it still contains statics
so that all your scripts and states still persist
*/}
    <Link href="/ChatPage"><GiEvilTree color="#ABC" /></Link>
    <Link href="/Contact"><button>Contact Me</button></Link>
    <Link href="/AboutUs"><button>About Us</button></Link>
    <Link href="/Fun"><button>Fun</button></Link>
</div>

export default Index;