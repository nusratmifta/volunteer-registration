import React, { useContext, useEffect, useState } from 'react';
import { Nav } from 'react-bootstrap';
import './MyTask.css';
import Group from '../../logos/Group 1329.png';
import { UserContext } from '../../App';
import TaskPage from '../TaskPage/TaskPage';

const MyTask = () => {

    const [registration, setRegistration] = useState([])

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const { displayName } = loggedInUser;

    useEffect(() => {
        fetch('https://boiling-ocean-87883.herokuapp.com/registration?email='+loggedInUser.email)
            .then(res => res.json())
            .then(data => setRegistration(data));
    }, [])
    

    return (

        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }}>
            <div className="header" style={{marginBottom:'50px'}}>
                <img src={Group} style={{ width: '202.81px', height: '60px' }} id="logo" alt="" />

                <div className="headerOption">
                    <Nav onClick="homeBtn">Home</Nav>

                    <Nav style={{ marginLeft: '50px' }} href="#home">Donation</Nav>
                    <Nav style={{ marginLeft: '50px' }} href="#features">Features</Nav>
                    <Nav style={{ marginLeft: '50px' }} href="#pricing">Blog</Nav>
                    <Nav style={{ marginLeft: '50px', fontSize: '20px' }} href="#pricing">{displayName}</Nav>

                </div>
            </div>

            <div className="container row">

                {
                    registration.map(task => <TaskPage myTask={task}></TaskPage>)
                }
            </div>

        </div>
    );
};

export default MyTask;