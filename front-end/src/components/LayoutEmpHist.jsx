import logo from "../assets/logo.png"
import { useNavigate } from 'react-router-dom';
import {VscSignOut} from "react-icons/vsc"
import React, { Component } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom';
import Employees from "./Employees";
import Historique from "./Historique";
// import { useHistory } from "react-router-dom";
export default class LayoutEmpHist extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
      }
      render() {
        return (
            <Routes>
            
            {/* <Route path="/monCompte" element={<Employees/>} />
            <Route path="/historique" element={<Historique/>} />
            <Route
                path="*"
                element={<Navigate to="/employees" />}
            /> */}
          </Routes>
        );
        }
}
