import React,{useState,useEffect} from 'react';
import {BrowserRouter as Router ,Route,Routes}  from "react-router-dom" ;
import Feed from './Feed';
import Library from './Library';
import Player from './Player';
import Trending from './Trending';
import Favorites from './Favorites';
import "./css/home.css"
import Sidebar from '../components/Sidebar';
import { setClientToken } from "../spotify";
import Login from "./Login"
import Logout from './Logout';


export default function Home() {
  const [token, setToken] = useState("");

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    const hash = window.location.hash;
    window.location.hash = "";
    if (!token && hash) {
      const _token = hash.split("&")[0].split("=")[1];
      window.localStorage.setItem("token", _token);
      setToken(_token);
      setClientToken(_token);
    } else {
      setToken(token);
      setClientToken(token);
    }
  }, []);



    return !token ? (
    <Login />
  ) : (
   <Router>
  <div  className='main-body'>
    <Sidebar/>
    <Routes>
      <Route path="/" element={<Library />}></Route>
      <Route path="/facescan" element={<Feed />}></Route>
      <Route path="/player" element={<Player />}></Route>
      <Route path="/trending" element={<Trending />}></Route>
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/logout" element={<Logout />} />
    </Routes>
</div>
    </Router>
  )
}
