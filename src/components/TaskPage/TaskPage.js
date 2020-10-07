import React from 'react';
import './TaskPage.css';

const TaskPage = ({ myTask }) => {
    const { date, task, picture ,id} = myTask;
    console.log(myTask);
    return (

        <div className='col-md-6'>
            <div className="container">
                <div className="eachTask">
                    <div >
                        <img id="taskImage" src={require(`../../images/${picture}`)} alt="" />
                    </div>
                    <div id="taskInformation">
                        <p id="task">{task}</p>
                        <p id="date">{date}</p>
                    </div>
                   
                </div>
                <button id="cancelBtn">Cancel</button>
            </div>

        </div>
    );
};

export default TaskPage;