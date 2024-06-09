import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar'
import axios from 'axios'

const Viewall = () => {
    const [data,changeData]=useState(
        [])
        const fetchData=()=>{
            axios.get("https://jsonplaceholder.typicode.com/users").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally()
        }

        useEffect(()=>{fetchData()},[])
    return (
        <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">username</th>
                                <th scope="col">email</th>
                                <th scope="col">phone</th>
                                <th scope="col">website</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(
                                    (value,index)=>{
                                        return <tr>
                                        <td>{value.name}</td>
                                        <td>{value.username}</td>
                                        <td>{value.email}</td>
                                        <td>{value.phone}</td>
                                        <td>{value.website}</td>
                                    </tr>
                                    }
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
       </div> </div>
    )
}

export default Viewall