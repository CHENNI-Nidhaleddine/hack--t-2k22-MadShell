import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Auth from '../pages/Auth';
// import Bnp from '../pages/Bnp';
import Connected from '../pages/Connected';
import Dashboard from '../pages/Connected';
import LandingPage from '../pages/LandingPage';
import MonCompte from '../pages/MonCompte';
import NaftalDash from '../pages/NaftalDash';



export default class Layout extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }

    render() {
        return (
            <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/auth" element={<Auth/>} />
            <Route path="/connected" element={<Connected/>} />
            <Route path="/bnp" element={<MonCompte/>} />
            <Route path="/temtem" element={<MonCompte/>} />
            <Route path="/connectedNaftal" element={<NaftalDash/>} />
            <Route path="/monCompte" element={<MonCompte/>} />
            <Route
                path="*"
                element={<Navigate to="/" />}
            />
    </Routes>
        )
    }
}