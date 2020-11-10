import React, { useState } from 'react'
import FlashCardsList from '../../components/FlashCardList'
import UserContext from '../../contexts/UserContext'


export default class DashboardRoute extends React.Component{

  
  static contextType = UserContext
  render(){
  return (
    <div>
      Welcome Back {this.context.user.name}!
    </div>
  );

  }
}



