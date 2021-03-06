import React, { Component } from 'react';

import {BrowserRouter as Router, Route} from 'react-router-dom';

import Landing from './component/Landing/Landing';
import Profile from './component/User/Profile';
import Groups from './component/Groups/Groups';
import Group from './component/Groups/Group';
import Events from './component/Events/Events';
import Event from './component/Events/Event';
import Achievements from './component/User/Achievements';
import Diets from './component/Diets/Diets';
import Diet from './component/Diets/Diet';
import UserFoods from './component/Diets/UserFoods';
import Foods from './component/Diets/Foods';
import PhyActivities from './component/Activities/PhyActivities';
import PhyActivity from './component/Activities/PhyActivity';
import UserPhyActivities from './component/Activities/UserPhyActivities';
import Plans from './component/Activities/Plans';
import TipDiets from './component/User/TipDiets';
import TipActivities from './component/User/TipActivities';

class App extends Component {
  
  render() {
    return (
      <Router>
        <div>
          <Route exact path ="/" render={ () => <Landing /> }/>
          <Route exact path ="/user/:id" render={ () => <Profile /> }/>
          <Route exact path ="/groups" render = { () => <Groups /> } />
          <Route exact path ="/group/:id" render = { () => <Group /> } />
          <Route exact path = "/group/:id/events" render = { () => <Events /> } />
          <Route exact path = "/event/:id" render = { () => <Event /> } />
          <Route exact path = "/user/:id/achievements" render = { () => <Achievements />} />
          <Route exact path = "/user/:id/diets" render = { () => <Diets /> } />
          <Route exact path = "/diet/:id" render = { () => <Diet /> } />
          <Route exact path = "/diet/:id/foods" render = {() => <Foods/>} />
          <Route exact path = "/user/:id/diet/:id/foods" render = {() => <UserFoods/>} />
          <Route exact path = "/phyactivities" render = {() => <PhyActivities/>} />
          <Route exact path = "/user/:id/phyactivities" render = {() => <UserPhyActivities/>} />
          <Route exact path = "/phyactivity/:id" render = {() => <PhyActivity/>} />
          <Route exact path = "/phyactivity/:id/plans" render = {() => <Plans/>} />
          <Route exact path = "/user/:id/tipdiets" render = {() => <TipDiets/>} />
          <Route exact path = "/user/:id/tipactivities" render = {() => <TipActivities/>} />
        </div>
      </Router>
    );
  }
}

export default App;
