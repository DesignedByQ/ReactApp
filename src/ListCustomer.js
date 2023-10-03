import React from "react"
import { useState } from "react"
import axios from 'axios';

var ListCustomer = () => {

    //npm install axios

    const [customer, setCustomer] = useState([

        { "customerId": 1, "name": "Allan", "accountNo": 1001 },
        { "customerId": 2, "name": "Jones", "accountNo": 1002 },
        { "customerId": 3, "name": "Larry", "accountNo": 1003 }

    ])

    const load =()=>{
        axios.get('urlendpoint').then((data)=>{
            setCustomer(data)
        })
    }

    return(
        <>
        <h3 className="display-4">Customer List</h3>

        <table>
            <tr><th>CustID</th><th>Name</th><th>AccNo</th></tr>
            {customer.map((c)=>{
                return <tr><td>{c.customerId}</td><td>{c.name}</td><td>{c.accountNo}</td></tr>
            })}
        </table>
        
            <button onClick={load}>Load</button>

        </>
    )

}

export default ListCustomer;