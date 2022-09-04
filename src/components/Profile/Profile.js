import React from 'react';
import "./Profile.css";
import Navbar from '../Navbar/Navbar';

const Profile = () => {
  return (
      <div className='profile'>
          <Navbar />
          <div className='profile_body'>
              <h1>Редагувати профіль</h1>
              <div className='profile_info'>
                  <img
                      src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                      alt="avatar"
                  />
                  <div className='profile_details'>
                      <h2> User information</h2>
                      <div className='profile_plans'>
                          
                          <button className='profile_signOut'>Вихід</button>
                      </div>

                      
                  </div>
                  
              </div>
          </div>
    </div>
  )
}

export default Profile;