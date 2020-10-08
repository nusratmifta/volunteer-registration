import React from 'react';
import './AllVolunteer.css';
import delete1 from '../../logos/delete1.png'
import { useHistory } from 'react-router-dom';


const AllVolunteer = ({ volunteer }) => {
    const { name, email, task, date, _id } = volunteer;



    const deleteButton = (id) => {
        fetch(`https://boiling-ocean-87883.herokuapp.com/delete/${id}` ,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result =>{
            console.log("delete success");
        })

        window.location.reload(false);
    }


    return (
        <div style={{ display: 'flex', marginLeft: '20px' }}>
            <p>{name}</p>
            <p>{email}</p>
            <p>{date}</p>
            <p style={{ marginLeft: '20px' }}>{task}</p>
            <button onClick={() => deleteButton(_id)} className="deleteVolunteer" > <img id="dltBtn" src={delete1} alt="" /></button>
        </div>
    );
};

export default AllVolunteer;