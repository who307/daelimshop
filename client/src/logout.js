/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge } from 'antd';
import axios from 'axios';
import { USER_SERVER } from './Config';
import { withRouter } from 'react-router-dom';

import { useSelector } from "react-redux";

function logout(props) {

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push("/");
      } else {
        alert('Log Out Failed')
      }
    });
  };

  
    return (
        
        <button>  
            <a onClick={logoutHandler}>Logout</a>
            </button>
      
    )
  }

export default withRouter(logout);

