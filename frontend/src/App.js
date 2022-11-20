import './App.css';
import {useEffect, useState} from "react";
import Comp from "./Comp";

function App() {
    const [data, setData] = useState([])
    let q = "";

    function fetchData() {
        q = document.getElementsByClassName("dropdown")[0].value
        const queryToExecute = "select name,address,email_id,c.policy_no from Client c,Policy p where (c.policy_no = p.policy_no and p.company_name = \"" + q + "\")";
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({query: queryToExecute})
        };
        fetch("http://localhost:8080/", requestOptions)
            .then(res => res.json())
            .then(json => {
                setData(json.result)
                console.log(json.result)
            })
    }

    useEffect(() => {}, [data])

    return (
        <div className="App">
            <h1>Insurance Management System</h1>
            <h2>Select company</h2>
            <select className={"dropdown"}>
                <option value={"LIC"} defaultChecked={true}>LIC</option>
                <option value={"Bajaj"}>Bajaj</option>
                <option value={"Birla"}>Birla</option>
                <option value={"TATA-AIA"}>TATA-AIA</option>
                <option value={"MAX"}>MAX</option>
            </select>
            <div className={"submitBtn"}>
                <div onClick={fetchData}>Show Results</div>
            </div>
            <Comp name={"Name"} addr={"Address"} email={"E-Mail"} policy={"Policy-No"}/>
            <div>
                {
                    data.map(each => {
                        return <div>
                            <Comp name={each.name} addr={each.address} email={each.email_id} policy={each.policy_no}/>
                            <br/>
                        </div>
                    })
                }
            </div>
        </div>
    );
}

export default App;
