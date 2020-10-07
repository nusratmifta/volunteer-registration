import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './VolunteerWork.css';

const VolunteerWork = ({ work }) => {
    const { name, pic, btnColor, key } = work;

    const history = useHistory();
    const addEventTask =(volunteerTask) =>{
        // console.log(volunteerTask);
        history.push(`/registration/${volunteerTask}`);
    }
    return (
        <div className="col-md-3">

            <img className="image" src={require(`../../images/${pic}`)} alt="" />
            <button onClick={()=>addEventTask(name)} style={{ backgroundColor: `${btnColor}` }} className="btnWork">{name}</button>

        </div>
    );
};

export default VolunteerWork;