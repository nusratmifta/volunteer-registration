import React, { useContext } from 'react';
import './Registration.css';
import logo from '../../logos/Group 1329.png';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { useHistory, useParams } from 'react-router-dom';

const Registration = (props) => {
    const {volunteerTask, pic}= useParams();

    const { register, handleSubmit,  errors } = useForm();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const {displayName, email}=loggedInUser;

    const picture = {picture:`${pic}`};
    
    const history = useHistory();
    const onSubmit = (data) => {
        const taskData ={...data, ...picture};
        console.log(taskData);
        fetch('https://boiling-ocean-87883.herokuapp.com/addRegistration', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(taskData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })

        history.push('/myTask')

    };
   

    return (
        <div className="registerPage">
            <img className="topLogo" src={logo} alt="" />
            <div className="inputField">
                <div className="container">
                    <h2 style={{ margin: '30px 0 25px 30px' }}>Register as a volunteer</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input type="text" name="name" defaultValue={displayName} ref={register({required: true})} id="" placeholder="name" />
                        {errors.name && <span style={{color: 'red'}}> <br/> This field is required</span>}
                        <br />

                        <input type="email" name="email" defaultValue={email} ref={register({required: true})} id="" placeholder="Username or Email" />
                        {errors.email && <span style={{color: 'red'}}> <br/> This field is required</span>}
                        <br />

                        <input type="date" name="date" id="" placeholder="Date" ref={register({ required: true })}/>
                        {errors.date && <span style={{color: 'red'}}> <br/> This field is required</span>}
                        <br />

                        <input type="text" name="description" id="" placeholder="Description(optional)" />                  
                        <br />

                        <input type="text" name="task" id="" defaultValue={volunteerTask}  placeholder="Volunteer Task" ref={register({ required: true })}/>
                        {errors.task && <span style={{color: 'red'}}> <br/> This field is required</span>}
                        <br/>

                        <input  className="registrationBtn" type="submit" value="Registration" />
                    </form>
                </div>
            </div>
            <footer style={{ marginTop: '20px' }}>.</footer>
        </div>
    );
};

export default Registration;