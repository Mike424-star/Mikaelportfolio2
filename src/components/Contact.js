import { FaGithub,FaMobile,FaMailBulk,FaLinkedin } from "react-icons/fa";
import  classes  from "./Contact.module.css";

const handleURl = (url) => {
    return () => window.open(url, "_blank")
}

const Contact = () => {
    return (<div className={classes.Contact} id="Contact">
     (<div className={classes.ContactIcons}>
        <FaGithub color = 'black' size='30px' style={{padding: '1%'}} 
        onClick={handleURl('https://github.com/Mike424-star')} />
        <FaMobile color = 'black' size='30px' style={{padding: '1%'}}
        onClick={handleURl('https://globfone.com/call-phone/')} />
        <FaMailBulk color = 'black' size='30px' style={{padding: '1%'}}
        onClick={handleURl('xbox.maikel@hotmail.com')} />
        <FaLinkedin color = 'black' size='30px' style={{padding: '1%'}}
        onClick={handleURl('https://www.linkedin.com/in/mikael-zyoun-0452ab1b1/')} />
    </div>
    </div>);
}

export default Contact ; 