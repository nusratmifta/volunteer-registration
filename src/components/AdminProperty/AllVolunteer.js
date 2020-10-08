import React from 'react';
import './AllVolunteer.css';
import delete1 from '../../logos/delete1.png'

const AllVolunteer = ({ volunteer }) => {
    const { name, email, task, date, id } = volunteer;
    console.log(task);
    return (
        <div style={{display: 'flex', marginLeft:'20px'}}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p style={{marginLeft:'20px'}}>{task}</p>
           <button className="deleteVolunteer" > <img id="dltBtn" src= {delete1} alt=""/></button>
          
           
        </div>
    );
};

export default AllVolunteer;