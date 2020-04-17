import {useEffect} from 'react';
import CustomButton from '../../comps/CustomButton';
import Header from '../../comps/Header';
import './contact.css';
import {MdEmail} from 'react-icons/md';
import {TiContacts} from 'react-icons/ti';

const Contact = () => {

    useEffect(()=> {
        setTimeout(()=>{
        document.querySelector("#contactpage").style.left = 0;
    }, 50)
    }, []);

return <div id="contactpage">
    <TiContacts color="#AAA" />
    <Header text="Contact me!" fontSize={24} />
    <MdEmail color="#ABB" />
    <CustomButton text="email" />
    <br />
    send email to "spark@my.bcit.ca"
</div>
}

export default Contact;