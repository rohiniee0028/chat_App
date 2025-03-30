import './styles/myStyles.css';
import { IconButton } from '@mui/material';
import React from 'react';
import logo from '../Images/live-chat.png';
import SearchIcon from '@mui/icons-material/Search';
import { AnimatePresence, motion } from "framer-motion"
import { useSelector } from 'react-redux';

const Users = () => {

  const lightTheme = useSelector((state) => state.themeKey)

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
        <div className={"ug-header" + (lightTheme ? "" : " dark")}>
          <img src={logo} style={{ height: '2rem', width: '2rem', marginLeft: '10px' }} />
          <p className={"ug-title" + (lightTheme ? "" : " dark")}>Online Users</p>
        </div>
        <div className={'sb-search' + (lightTheme ? "" : " dark")}>
          <IconButton className={(lightTheme ? "" : " dark")}>
            <SearchIcon />
          </IconButton>
          <input placeholder='Search' className={'search-box' + (lightTheme ? "" : " dark")} />
        </div>
        <div className='ug-list'>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>          
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>          
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>          
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.98 }} className={"list-item" + (lightTheme ? "" : " dark")}>
            <p className='con-icon'>T</p>
            <p className={'con-title' + (lightTheme ? "" : " dark")}>Test User</p>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}

export default Users;
