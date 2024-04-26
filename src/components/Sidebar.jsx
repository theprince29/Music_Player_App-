import React,{useState,useEffect} from 'react'
import "./css/sidebar.css"
import SidebarButton from "./SidebarButton"
import { MdFeed } from "react-icons/md";
import { LiaDoorOpenSolid } from "react-icons/lia";
import { BsFire } from "react-icons/bs";
import { BsFillPlayCircleFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { MdLibraryMusic } from "react-icons/md";
import apiClient from "../spotify"

export default function Sidebar() {
  const [image,setImage] = useState("https://pbs.twimg.com/profile_images/1772819769311551488/0B9j0Vt5_400x400.jpg")

  useEffect(()=>{
    apiClient.get("me").then((response) =>{
      
      setImage(response.data.images[0].url)
    });
  },[])

  return (
    <div className='sidebar_container'>
      <img src={image} alt="profile-img" className='profile-img' />
      <div>
      <SidebarButton title='Face Scan' to='/facescan' icon={<MdFeed />} />
      <SidebarButton title='Trending' to='/trending' icon={<BsFire />}/>
      <SidebarButton  title='Player' to='/player' icon={<BsFillPlayCircleFill />}/>
      <SidebarButton  title='Favorites' to='/favorites' icon={<AiFillHeart />}/>
      <SidebarButton  title='Library' to='/' icon={<MdLibraryMusic />}/>
      </div>
      <SidebarButton title='Sign out' to='/logout' icon={<LiaDoorOpenSolid />}/>
    </div>
  )
}
    