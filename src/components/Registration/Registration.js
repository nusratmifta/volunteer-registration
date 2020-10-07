import React, { useContext } from 'react';
import './Registration.css';
import logo from '../../logos/Group 1329.png';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { useParams } from 'react-router-dom';

const Registration = (props) => {
    const {volunteerTask}= useParams();
    // console.log(volunteerTask);
    const { register, handleSubmit,  errors } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName, email}=loggedInUser;

    const onSubmit = (data) => {
        console.log(data)
    };
    // console.log(watch("example"));

    return (
        <div className="registerPage">
            <img className="topLogo" src={logo} alt="" />
            <div className="inputField">
                <div className="container">
                    <h2 style={{ margin: '30px 0 25px 30px' }}>Register as a volunteer</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" defaultValue={displayName} ref={register({required: true})} id="" placeholder="name" />
                        <br />

                        <input type="email" name="email" defaultValue={email} ref={register({required: true})} id="" placeholder="Username or Email" />
                        <br />

                        <input type="date" name="date" id="" placeholder="Date" ref={register({ required: true })}/>
                        {errors.date && <span style={{color: 'red'}}> <br/> This field is required</span>}
                        <br />

                        <input type="text" name="description" id="" placeholder="Description(optional)" />                  
                        <br />

                        <input type="text" name="organize" id="" defaultValue={volunteerTask}  placeholder="Volunteer Task" />
                        <br/>

                        <input className="registrationBtn" type="submit" value="Registration" />
                    </form>
                </div>
            </div>
            <footer style={{ marginTop: '20px' }}>.</footer>
        </div>
    );
};

export default Registration;