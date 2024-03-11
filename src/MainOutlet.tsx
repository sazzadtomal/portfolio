import { Outlet } from "react-router-dom"
import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const MainOutlet = () => {


    const { pathname } = useLocation();

    
    useLayoutEffect(() => {
      
      window.history.scrollRestoration = 'manual'
      window.scrollTo(0,0)

      },[pathname]);



  return (
    <main className=" pt-16 md:pt-20">
           <Outlet/>
  </main>
  )
}

export default MainOutlet