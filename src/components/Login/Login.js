import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from '../../firebase.config';
import './Login.css';
import logo from '../../logos/volunteer.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';


firebase.initializeApp(firebaseConfig);

const Login = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history= useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const provider = new firebase.auth.GoogleAuthProvider();

    const handleSignIn = () => {
        // console.log("sign in click");
        firebase.auth().signInWithPopup(provider)
            .then(res => {
                // const { displayName, email } = res.user;
                const user=res.user;
                // console.log(user);
                setLoggedInUser(user);
                history.replace(from);
            })
            .catch(err => {
                console.log(err);
                console.log(err.message);
            });
    }

    const createAccount = () => {
        // alert('please sign with Google !');
    }
    return (
        <div className="loginPage">
            <img className="logo" src={logo} alt="" />
            <div className="form">
                {/* <h4 style={{ textAlign: 'center', marginTop: '50px' }}>Please give user name and password</h4> */}
                {/* <button className="signInBtn" onClick={handleSignIn}><i class="fa fa-user-o" aria-hidden="true" style={{ marginRight: '80px', color: 'green' }} ></i>Continue with Google</button> */}
                <h5 style={{marginTop: '60px'}}>User Name</h5>
                <input type="text"></input>
        
                <h5>Password</h5>
                <input type="password"></input>
                <br></br>
                <br></br>
                <button class="form-btn">Login</button>

                <p> <span className='text'>Don't have an account?</span> <a onClick={createAccount} href="/login">Create an account</a></p>
            </div>
            <footer style={{ marginTop: '30px' }}>--</footer>
        </div>
    );
};

export default Login;