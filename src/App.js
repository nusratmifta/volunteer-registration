import React, { createContext, useState } from 'react';
import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './components/NotFound/NotFound';
import Login from './components/Login/Login';
import Registration from './components/Registration/Registration';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import MyTask from './components/MyTask/MyTask';
import VolunteerRegister from './components/AdminProperty/VolunteerRegister'
import AddEvent from './components/AdminProperty/AddEvent';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

      <Router>

        <Switch>

          <Route path="/home">
            <Home></Home>
          </Route>

          <Route path="/login">
            <Login></Login>
          </Route>

          <PrivateRoute path="/registration/:volunteerTask/:pic">
            <Registration></Registration>
          </PrivateRoute>

          <PrivateRoute path="/myTask">
            <MyTask></MyTask>
          </PrivateRoute>

          <Route path="/volunteerList">
            <VolunteerRegister></VolunteerRegister>
          </Route>

          <Route path="/taskSubmit">
            <AddEvent></AddEvent>
          </Route>

          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="*">
            <NotFound></NotFound>
          </Route>


        </Switch>

      </Router>

    </UserContext.Provider>
  );
}

export default App;
