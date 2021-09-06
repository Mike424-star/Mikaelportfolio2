import classes from "./Skills.module.css";
import PageHeader from "./PageHeader/PageHeader";

const ListTitleStyle = { fontweight: 900, color: '#f6f8f5', marginbottom: '4px'}

const backendSkills = 
<ul>
    <li style={ListTitleStyle}>Backend</li>
    <li>C# - Java -SQL - Python</li>
    
</ul>

const frontendSkills = 
<ul>
    <li style={ListTitleStyle}>Frontend</li>
    <li>Reactjs - Javascript - HTML - CSS</li>
</ul>

const totalSkills = [backendSkills, frontendSkills]



const Skills = () => {
    return (<div className={classes.Skills} id="Skills">
        <PageHeader title={'My Skills'} />
        <div className={classes.Container}>
            {totalSkills.map(skills => {
                return (
                    <div className={classes.List}>
                        {skills}
                        </div>
                )
            })}
        </div>
    </div>);
}

export default Skills ; 