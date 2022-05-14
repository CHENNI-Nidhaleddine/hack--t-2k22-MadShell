import React, {Component} from 'react';
import Layout from './components/Layout'
import { BrowserRouter } from 'react-router-dom';



function App(){
   React.useEffect(() => {
    const intervall=setInterval(()=>{React.loadData()},3000)
      return () => {
        clearInterval(intervall)
      }
    }, [])
  
    return (
        <BrowserRouter>
          <div className="App"> 
            <Layout />
          </div>
        </BrowserRouter>
    )
  
}

export default App