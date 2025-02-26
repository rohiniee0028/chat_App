import React, { useState } from 'react';
import './styles/myStyles.css';
import SideBar from './SideBar';
import ChatArea from './ChatArea';
import Welcome from './Welcome';
import CreateGroups from './CreateGroups';
import Users_Groups from './Users_Groups';
import { Outlet } from 'react-router-dom';
import Users from './Users';
import Groups from './Groups';

// import WorkArea from './WorkArea';

const MainContainer = () => {

    return (
        <div className='main-container'>
            <SideBar />
            <Outlet/>
            {/* <Welcome />
            <CreateGroups />
            <ChatArea props={conversations[0]} />
            <Users/>
            <Groups/> */}
        </div>
    );
}

export default MainContainer;
