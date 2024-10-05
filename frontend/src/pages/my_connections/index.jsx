import { AcceptConnection, getMyConnectionRequest } from '@/config/redux/action/authAction';
import DasboardLayout from '@/layout/DashboardLayout'
import UserLayout from '@/layout/UserLayout'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import styles from "./index.module.css"
import { BASE_URL } from '@/config';
import { useRouter } from 'next/router';
// import { useEffect } from 'react/cjs/react.production.min';

export default function MyConnectionsPage() {

  const dispatch=useDispatch();
  const authState=useSelector((state)=>state.auth);


  useEffect(()=>{
    
    dispatch(getMyConnectionRequest({token:localStorage.getItem("token")}));
  },[])
const router=useRouter();

  useEffect(()=>{
    
    if(authState.connectionRequest.length != 0){
      console.log(authState.connectionRequest);
    }

  },[authState.connectionRequest])













  return (
    <UserLayout>
      
    <DasboardLayout>
      <div styles={{display:"flex",flexDirection:"column",gap:"1.7rem"}}>
        <h4>My Connections</h4>
        {authState.connectionRequest.length===0 && <h2>No Connection Request Pending</h2>}

        {authState.connectionRequest.length !=0 && authState.connectionRequest.filter((connection)=>connection.status_accepted===null).map((user,index)=>{
          return(
            <div onClick={()=>{
              router.push(`/view_profile/${user.userId.username}`)
            }} className={styles.userCard} key={index}>
              <div styles={{display:"flex",alignItem:"center",gap:"1.2rem",justifyContent:"spaceBetween"}}>
                <div className={styles.profilePicture}>
                  <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt=""/>
                </div>
                <div className={styles.userInfo}>
                  <h3>{user.userId.name}</h3>
                  <p>{user.userId.username}</p>
                </div>
                <button onClick={(e)=>{
                  e.stopPropagation();

                  dispatch(AcceptConnection({
                    connectionId:user._id,
                    token:localStorage.getItem("token"),
                    action:"accept"
                  }));
                }} className={styles.connectedButton}>Accept</button>
              </div>
            </div>
          )
        })}


        <h4>My Network</h4>
        {authState.connectionRequest.map((user)=>
          <p></p>
        )}

{authState.connectionRequest.length !=0 && authState.connectionRequest.filter((connection)=>connection.status_accepted !==null).map((user,index)=>{
  return (
    <div onClick={()=>{
      router.push(`/view_profile/${user.userId.username}`)
    }} className={styles.userCard} key={index}>
      <div styles={{display:"flex",alignItem:"center",gap:"1.2rem",justifyContent:"spaceBetween"}}>
        <div className={styles.profilePicture}>
          <img src={`${BASE_URL}/${user.userId.profilePicture}`} alt=""/>
        </div>
        <div className={styles.userInfo}>
          <h3>{user.userId.name}</h3>
          <p>{user.userId.username}</p>
        </div>
        
      </div>
    </div>
  )
})}



      </div>
    </DasboardLayout>




    </UserLayout>
  )
}
