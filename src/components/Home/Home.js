import React from 'react';
import Header from '../Header/Header';
import VolunteerWork from '../VolunteerWork/VolunteerWork';



const volunteerInformation = [
    {
        name: 'Management Team',
        pic: 'childSupport.png',
        btnColor: '#FFBD3E',
        key:'1'
    },
    {
        name: 'Technical Team',
        pic: 'refuseShelter.png',
        btnColor: '#FF7044',
        key:'2'
    },
    {
        name: 'General Member',
        pic: 'foodCharity.png',
        btnColor: '#3F90FC',
        key:'3'
    }
    
];
const Home = () => {

    return (
        <div>
    

            <Header></Header>
           
{/* carousel area */}
            
            <div className="container">
            <div className="row">
                {
                    volunteerInformation.map(work => <VolunteerWork
                         work={work}
                         key={work.key}
                         ></VolunteerWork>)
                }
            </div>
            </div>
        </div>
        
    );
};

export default Home;