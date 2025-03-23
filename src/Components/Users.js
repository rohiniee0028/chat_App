import './styles/myStyles.css';
import { IconButton } from '@mui/material';
import React from 'react';
import logo from '../Images/live-chat.png';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from "framer-motion"

const Users = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0 }}
        transition={{
          ease: "anticipate",
          duration: "0.3"
        }}
        className='list-container'
      >
        <div className='ug-header'>
          <img src={logo} style={{ height: '2rem', width: '2rem', marginLeft: '10px' }} />
          <p className='ug-title'>Online Users</p>
        </div>
        <div className='sb-search'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <input placeholder='Search' className='search-box' />
        </div>
        <div className='ug-list'>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
          <div className='list-item'>
            <p className='con-icon'>T</p>
            <p className='con-title'>Test User</p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
