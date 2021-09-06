import classes from './Navbar.module.css'

const Navbar = () => {
    return (<div className={classes.Navbar} >
        <nav> 
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/#About">About me</a>
                </li>
                <li>
                    <a href="/#Skills">Skills</a>
                </li>
                <li>
                    <a href="/#Education">Educations</a>
                </li>
                <li>
                    <a href="/#Contact">Contact me</a>
                </li>
            </ul>
        </nav>
    </div>);
}

export default Navbar ; 