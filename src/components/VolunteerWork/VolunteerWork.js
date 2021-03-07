import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerWork.css';
// import childSupport from "../../images/childSupport.png";
import general_member from "../../images/general_member.png";
import management_team from "../../images/management_team.png";
import tec_team from "../../images/tec_team.png";

const VolunteerWork = ({ work }) => {
    const { name, pic, btnColor, key } = work;
     console.log(pic);
    const history = useHistory();
    const addEventTask =(volunteerTask, pic) =>{
          console.log(pic);
        history.push(`/registration/${volunteerTask}/${pic}`);
    }
    return (
        <div className="col-md-4">


{(() => {

if (key == 1) {

  return (

    <img className="image" src={management_team} alt="" />


  )

} else if (key == 2) {

  return (

    <img className="image" src={tec_team} alt="" />


  )

} else {

  return (

    <img className="image" src={general_member} alt="" />


  )

}

})()}




              {/* <img className="image" src={childSupport} alt="" /> */}
            {/* <img className="image" src={require(`../../images/childSupport.png`)} alt="" /> */}
            <button  onClick={()=>addEventTask(name, pic)}  style={{ backgroundColor: `${btnColor}` }} className="btnWork">{name}</button>
    
        </div>
    );
};

export default VolunteerWork;