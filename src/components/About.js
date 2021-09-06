import classes  from "./About.module.css";
import PageHeader from "./PageHeader/PageHeader";
import person1 from "./../img/person1.jpg";
const About = () => {
    return (<div className={classes.AboutMe} id="About"> 
      <PageHeader title={'About me'} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>Mikael Zyoun</h2>
          <p>
          Personally, I see myself as a hardworking person who has one
steady work ethic and constantly looking for new challenges.
I always adapt to the group or needs in the workplace.
Working in a team is something I can skillfully take care of and nothing I consider difficult or
difficult. I am analytical and efficient with problem solving and like to take
position when it is important and constantly strives for constructive criticism.
          </p>
        </div>
        <div className={classes.Photo}>
        <img className={classes.person1} src={person1} alt="person1"></img>
      </div>
      </div>
    </div>);
    
}

export default About ; 