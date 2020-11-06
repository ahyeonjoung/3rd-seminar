
import './App.css';
import SearchInput from './components/SearchInput';
import SearchResult from './components/SearchResult';
import React,{useState} from "react";
import axios from 'axios';
const client=axios.create({
  baseURL:"https://api.github.com/user/"});

function App() {
  const [User,setUser]=React.useState(null);
  const getUserAPI=async(username)=>{
    const {data}=await client.get(username);
    console.log("data",data);
    setUser(data);
  };
  React.useEffect(()=>{
    getUserAPI("pa-rang");
  },[]);
  return (
    <>
    <SearchInput onSubmit ={getUser}/>
    <SearchResult user={user}/>
    </>

  );
}

export default App;
