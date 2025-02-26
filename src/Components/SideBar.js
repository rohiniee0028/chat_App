import './styles/myStyles.css';
import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupAddIcon from '@mui/icons-material/GroupAdd';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
import SearchIcon from '@mui/icons-material/Search';
import { IconButton } from '@mui/material'
import ConversationsItem from './ConversationsItem';
import { useNavigate } from 'react-router-dom';


const SideBar = () => {
    const [lightTheme, setLightTheme] = useState(true)
    const [conversations, setConversations] = useState([
        {
            name: 'Test#1',
            lastMessage: 'Last Message #1',
            timeStamp: 'today'

        },
        {
            name: 'Test#2',
            lastMessage: 'Last Message #2',
            timeStamp: 'today'

        },
        {
            name: 'Test#3',
            lastMessage: 'Last Message #3',
            timeStamp: 'today'

        }
    ])

    const navigate = useNavigate();

    return (
        <div className='sideBar-container'>
            <div className={"sb-header" + (lightTheme ? "" : " dark")}>
                <div>
                    <IconButton>
                        <AccountCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                </div>
                <div>
                    <IconButton onClick={() => navigate('users')}>
                        <PersonAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => navigate('groups')}>
                        <GroupAddIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => navigate('create-groups')}>
                        <AddCircleIcon className={"icon" + (lightTheme ? "" : " dark")} />
                    </IconButton>
                    <IconButton onClick={() => { setLightTheme((prevValue) => { return !prevValue; }) }}>
                        {lightTheme && <NightlightIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                        {!lightTheme && <LightModeIcon className={"icon" + (lightTheme ? "" : " dark")} />}
                    </IconButton>
                </div>
            </div>
            <div className={'sb-search' + (lightTheme ? "" : " dark")}>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <input placeholder='Search' className={'search-box'+ (lightTheme ? "" : " dark")} />
            </div>
            <div className={'sb-conversations' + (lightTheme ? "" : " dark")}>
                {
                    conversations.map((conversations) => {
                        return <ConversationsItem props={conversations} key={conversations.name} />
                    })
                }
            </div>
        </div>
    );
}

export default SideBar;
