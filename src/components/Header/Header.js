import React from 'react';
import { Button, Nav} from 'react-bootstrap';
import './Header.css';
import logo from '../../logos/volunteer.png';
import { useHistory } from 'react-router-dom';

const Header = () => {
    const history = useHistory();
    const enterRegister = () =>{ 
        history.push('/myTask');
    }

    const handleAdminProperties = () =>{
        history.push('/volunteerList');
    }

    return (
        <div style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)' }} >

            <div className="navElement">
                <img src={logo} style={{ width: '150px', height: '120px' }} id="logo" alt=""  />

                <div className="navOption">
                    <Nav>Home</Nav>

                    <Nav style={{ marginLeft: '50px' }} href="#home">Donation</Nav>
                    <Nav style={{ marginLeft: '50px' }} href="#features">Features</Nav>
                    <Nav style={{ marginLeft: '50px' }} href="#pricing">Events</Nav>

                    <div style={{ marginLeft: '50px', }} >
                        <Button  className="registerButton">Register</Button>
                        {/* <Button onClick={handleAdminProperties} className="adminButton">Admin</Button> */}
                    </div>
                </div>
            </div>

            <h1 style={{ textAlign: 'center', fontWeight: 700, fontSize: "40px", marginTop: '50px' }}>I GROW BY HELPING PEOPLE IN NEED</h1>
            <form style={{ textAlign: 'center', marginTop:'40px', marginBottom:'50px' }}>
                <input style={{ backgroundColor: '#FBFBFB' }} className="searchArea" type="text" placeholder="Search..."></input>
                <button style={{ padding: '7px 17px', backgroundColor: ' #3F90FC', borderRadius: '0px 8px 8px 0px' }} type="submit">Search</button>
                
                
            </form>

           

        </div>
    );
};

export default Header;
