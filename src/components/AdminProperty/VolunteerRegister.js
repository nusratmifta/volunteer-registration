import React, { useEffect, useState } from 'react';
import Group from '../../../src/logos/Group 1329.png';
import './Admin.css';
import users from '../../../src/logos/users-alt 1.png';
import plus from '../../../src/logos/plus 1.png';
import { useHistory } from 'react-router-dom';
import { Nav } from 'react-bootstrap';
import AllVolunteer from './AllVolunteer';


const VolunteerRegister = () => {
    const history = useHistory();

    const registerList = () => {
        history.push('/volunteerList');
    }

    const submitTask = () => {
        history.push('/taskSubmit');
    }

    const [registration, setRegistration] =useState([]);

    useEffect( () => {
        fetch('https://boiling-ocean-87883.herokuapp.com/volunteerList')
        .then(res => res.json())
        .then( result => {
            setRegistration(result);
        })
    },[])

    return (
        <div>
            <div style={{ display: 'flex' }}>
                <img src={Group} style={{ width: '202.81px', height: '60px' }} id="logo" alt="" />
                <h3 style={{ margin: '50px 0 0 100px', fontWeight: 500 }}>Volunteer register list</h3>
            </div>

            <br />
            <br />
            <div style={{ marginLeft: '75px' }}>
                <button className="btn" style={{ border: 'none', backgroundColor: 'white' }} onClick={registerList}  > <img style={{ width: '19px', height: '19px', color: 'blue' }} src={users} alt="" /> <span style={{ fontSize: '16px', border: 'none' }}> Volunteer register list</span> </button>
                <br />
                <br />
                <button className="btn" style={{ border: 'none', backgroundColor: 'white', marginTop: '20px' }} onClick={submitTask} > <img style={{ width: '19px', height: '19px', color: 'blue' }} src={plus} alt="" /> <span style={{ fontSize: '16px', border: 'none' }}> Add event</span> </button>

            </div>
            <div className="taskArea">
                <div className="taskOperation">

                    <div style={{ display: 'flex', marginLeft: '20px', }}>
                        <Nav style={{marginRight:'120px', marginLeft:'20px'}} className="navItem">Name</Nav>
                        <Nav  style={{marginRight:'120px'}} className="navItem">Email Id</Nav>
                        <Nav  style={{marginRight:'100px'}}className="navItem">Registating date</Nav>
                        <Nav  style={{marginRight:'160px'}}className="navItem">Volunteers list</Nav>
                        <Nav className="navItem">action</Nav>
                    </div>

                    <div>
                    {
                        registration.map(volunteer => <AllVolunteer volunteer={volunteer}></AllVolunteer>)
                    }
                    </div>
    
                </div>

            </div>

        </div>
    );
};

export default VolunteerRegister;