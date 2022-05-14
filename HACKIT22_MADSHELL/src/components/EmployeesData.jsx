import React from "react"

class EmployeesData extends React.Component{
    constructor(props){
        super(props);
        this.state={
            workers:null
        };
    }

    componentDidMount(){
        fetch("http://192.168.0.199:8000/api/v1/companies/e7806bd4-e0c4-4aca-80ad-300a526b75f2/")
        .then(response=> response.json())
        .then(data=>this.setState({workers: data.Workers}))
    }

    render(){
        const {workers}=this.state;
       
        return (JSON.stringify(workers))
    }
}
  
export {EmployeesData}