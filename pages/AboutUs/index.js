import {useEffect} from 'react';
import Link from 'next/link';
import Header from '../../comps/Header';
import './aboutUs.css';
import {FaLock} from 'react-icons/fa';
import {IoIosReturnLeft} from 'react-icons/io';

const AboutUs = () => {
    useEffect(()=> {
        setTimeout(()=>{
        document.querySelector("#aboutuspage").style.left = 0;
    }, 30)
    }, []);

return <div id="aboutuspage">
<FaLock color="#D11" />
<Header text="It's a private page that only opens to good person" fontSize={16} />
<Link href="../"><IoIosReturnLeft color="#000" /></Link>
return to homepage
</div>
}
export default AboutUs