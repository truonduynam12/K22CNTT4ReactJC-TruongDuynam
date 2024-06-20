import { useEffect, useState } from 'react';
import './App.css';
import TdnCategoryList from './compronents/TdnCategoryList';
//import axios from 'axios';
import axios from './api/TdnApi';
function TdnApp() {
  // lấy dữ liệu từ api
const [tdnCateRespose,setTdnCategories]= useState([]);

const getCategories =async ()=>{
 
  const tdnCateRespose =  await  axios.get("tdnCatrgory");
  setTdnCategories(tdnCateRespose.data);
}
useEffect(() =>{
  getCategories();
  console.log("tdnCategories:",setTdnCategories);
},[])

  return (
    <div className="container border my -3">
      <h1>TRƯƠNG DUY NAM - Call API </h1>

         
         < TdnCategoryList renderTdnCategories ={tdnCateRespose} />
      </div>
  );
}

export default TdnApp;
