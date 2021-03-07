import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerWork.css';

const VolunteerWork = ({ work }) => {
    const { name, pic, btnColor, key } = work;
    //  console.log(pic);
    const history = useHistory();
    const addEventTask =(volunteerTask, pic) =>{
          console.log(pic);
        history.push(`/registration/${volunteerTask}/${pic}`);
    }
    return (
        <div className="col-md-4">

            <img className="image" src={require(`../../images/${pic}`)} alt="" />
            <button  onClick={()=>addEventTask(name, pic)}  style={{ backgroundColor: `${btnColor}` }} className="btnWork">{name}</button>
    
        </div>
    );
};

export default VolunteerWork;