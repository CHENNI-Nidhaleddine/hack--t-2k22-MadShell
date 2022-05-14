import React from "react"

class Montant extends React.Component{
    constructor(props){
        super(props);
        this.state={
            counter:null
        };
    }

    componentDidMount(){
        fetch("http://192.168.0.199:8000/api/v1/companies/e7806bd4-e0c4-4aca-80ad-300a526b75f2/")
        .then(response=> response.json())
        .then(data=>this.setState({counter: data.credit}))
    }

    render(){
        const {counter}=this.state;
        return (JSON.stringify(counter))
    }
}
  
export {Montant}