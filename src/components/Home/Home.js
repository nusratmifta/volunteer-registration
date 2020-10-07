import React from 'react';
import Header from '../Header/Header';
import VolunteerWork from '../VolunteerWork/VolunteerWork';



const volunteerInformation = [
    {
        name: 'Child Support',
        pic: 'childSupport.png',
        btnColor: '#FFBD3E',
        key:'1'
    },
    {
        name: 'Refuge Shelter',
        pic: 'refuseShelter.png',
        btnColor: '#FF7044',
        key:'2'
    },
    {
        name: 'Food Charity',
        pic: 'foodCharity.png',
        btnColor: '#3F90FC',
        key:'3'
    },
    {
        name: 'Host a Clothing Swap',
        pic: 'clothSwap.png',
        btnColor: '#421FCF',
        key:'4'
    },
    {
        name: 'Host a river clean-up',
        pic: 'riverClean.png',
        btnColor: '#3F90FC',
        key:'5'
    },
    {
        name: 'Clean water for Children',
        pic: 'cleanWater.png',
        btnColor: '#421FCF',
        key:'6'
    },
    {
        name: 'Good education',
        pic: 'goodEducation.png',
        btnColor: '#FFBD3E',
        key:'7'
    },
    {
        name: 'New books for Children',
        pic: 'newBooks.png',
        btnColor: '#FF7044',
        key:'8'
    },
    {
        name: 'Host a study group',
        pic: 'studyGroup.png',
        btnColor: '#FFBD3E',
        key:'9'
    },
    {
        name: 'Build Bird house for your neighbors',
        pic: 'birdHouse.png',
        btnColor: '#3F90FC',
        key:'10'
    },
    {
        name: 'Organize books at the library',
        pic: 'libraryBooks.png',
        btnColor: '#FF7044',
        key:'11'
    },
    {
        name: 'Give a seminar on driving safety',
        pic: 'driveSafety.png',
        btnColor: '#421FCF',
        key:'12'
    },
    {
        name: 'Give free music lesson',
        pic: 'musicLessons.png',
        btnColor: '#421FCF',
        key:'13'       
    },
    {
        name: 'Teach people how to register a vote',
        pic: 'voteRegister.png',
        btnColor: '#FFBD3E',
        key:'14'
    },
    {
        name: 'Clean up your local park',
        pic: 'clearnPark.png',
        btnColor: '#3F90FC',
        key:'15'
    },
    {
        name: 'Give it helps to local adults',
        pic: 'ITHelp.png',
        btnColor: '#FF7044',
        key:'16'
    },
    {
        name: 'Foster a shelter animal',
        pic: 'animalShelter.png',
        btnColor: '#FFBD3E',
        key:'17'
    },
    {
        name: 'Babysit during PTA meetings',
        pic: 'babySit.png',
        btnColor: '#3F90FC',
        key:'18'
    },
    {
        name: 'Collect stuffed animal',
        pic: 'stuffedAnimals.png',
        btnColor: '#FF7044',
        key:'19'
    },
    {
        name: 'Collect School supplies',
        pic: 'schoolSuffiles.png',
        btnColor: '#421FCF',
        key:'20'
    }
];
const Home = () => {

    return (
        <div>
            <Header></Header>
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