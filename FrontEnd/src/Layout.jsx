import { useState, useEffect } from 'react'
import Header from 'components/Header'
import { Outlet, NavLink,useLocation } from "react-router";
import 'css/default.css'

export default function Layout() {
    const location = useLocation();

  let pageName = ''
  useEffect(() => {
    if (location.pathname === "/") {
      pageName = 'home'
    }else if(location.pathname == "/projects"){
      pageName = 'projects'
    }else if (location.pathname == "/skills"){
      pageName = 'skills'
    }else if (location.pathname == "/contact"){
      pageName = 'contact'
    }

    document.body.setAttribute("location", pageName);

    return () => {
      document.body.removeAttribute("location");
    };
  }, [location]);
   
  return (
    <>
      <Header></Header>
      <article>
        <div className = "article">
          <Outlet></Outlet>
        </div>
      </article>
    </>
  )
}


