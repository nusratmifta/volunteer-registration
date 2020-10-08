import React from 'react';
import Group from '../../../src/logos/Group 1329.png';
import './Admin.css';
import users from '../../../src/logos/users-alt 1.png';
import plus from '../../../src/logos/plus 1.png';
import { useHistory } from 'react-router-dom';



const AddEvent = () => {

    const history = useHistory();

    const registerList = () => {
        history.push('/volunteerList');
    }

    const submitTask = () => {
        history.push('/taskSubmit');
    }
    return (
        <div>
            <div style={{ display: 'flex' }}>
                <img src={Group} style={{ width: '202.81px', height: '60px' }} id="logo" alt="" />
                <h3 style={{ margin: '50px 0 0 100px', fontWeight: 500 }}>Add event</h3>
            </div>

            <br />
            <br />
            <div style={{ marginLeft: '75px' }}>
                <button className="btn" style={{ border: 'none', backgroundColor: 'white' }} onClick={registerList}  > <img style={{ width: '19px', height: '19px', color: 'blue' }} src={users} alt="" /> <span style={{ fontSize: '16px', border: 'none' }}> Volunteer register list</span> </button>
                <br />
                <br />
                <button className="btn" style={{ border: 'none', backgroundColor: 'white', marginTop: '20px' }} onClick={submitTask} > <img style={{ width: '19px', height: '19px', color: 'blue' }} src={plus} alt="" /> <span style={{ fontSize: '16px', border: 'none' }}> Add event</span> </button>

            </div>
            <div className="taskArea" >
                <div className='taskOperation'>
                    <form>

                        <input className="titleNameInput" type="text" name="title" id="" placeholder=" Enter title" />
                        <input className="titleNameInput" type="date" name="date" id="" />
                        <input type="text" name="description" id="" placeholder="Description"/>
                    </form>
                </div>

            </div>
            <button id='submitBtn'>Submit</button>

        </div>
    );
};

export default AddEvent;