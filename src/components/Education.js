import classes  from "./Education.module.css";
import PageHeader from "./PageHeader/PageHeader";
const Education = () => {
    return (<div className={classes.Education} id="Education"> 
      <PageHeader title={'Educations'} />
      <div className={classes.Container}>
        <div className={classes.Text}>
          <h2>System developer 2020-2022</h2>
          <p>
          A systems developer is a type of software developer. They develop and implement applications and programs for the backend processing systems used in businesses and organisations. Backend processing systems are the behind-the-scenes parts of software that don’t have a user interface, except for administration purposes. They are used a lot in online banking and HR systems, for example.
          </p>
          <h2>Logistics engineering 2018-2020</h2>
      <p>
      As a production logistician, you work to create efficient logistics and that the right thing is in the right place at the right time. If you are driven, see wholes and like to communicate with other people, this is a professional role that suits you! As a production logistician, you work to create efficient logistics and that the right thing is in the right place at the right time. If you are driven, see wholes and like to communicate with other people, this is a professional role that suits you!
          </p>
      </div>
      </div>
      </div>);
    
}

export default Education ; 
