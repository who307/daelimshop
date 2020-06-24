/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Icon, Badge, Card } from 'antd';
import axios from 'axios';
import { USER_SERVER } from './Config';
import { withRouter } from 'react-router-dom';



import { useSelector } from "react-redux";
import Meta from 'antd/lib/card/Meta';

function logout(props) {

  const logoutHandler = () => {
    axios.get(`${USER_SERVER}/logout`).then(response => {
      if (response.status === 200) {
        props.history.push('/')
        
        sessionStorage.removeItem('logintoken');
        
      } else {
        alert('Log Out Failed')
      }
    });
  };

  
    return (
        
        <div>

        
        <button>  
            <a onClick={logoutHandler}>Logout</a>
        </button>

        <Card>
          
        </Card>

        </div>
       
           
      
    )
  }

export default withRouter(logout);

