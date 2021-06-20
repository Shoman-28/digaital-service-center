import React, { useContext, useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { userContext } from '../../../../App';
import Sidebar from '../../Sidebar/Sidebar';

import './OrderList.css'
const OrderList = () => {
    const { user } = useContext(userContext);
    const[orderList, setOrderList]=useState([])
    useEffect(() => {
        fetch("https://arcane-refuge-91321.herokuapp.com/orderList")
            .then((res) => res.json())
            .then((data) => {
                setOrderList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div>
            
            <Sidebar/>
           
            <div className="content">
                <div className="d-flex justify-content-between order-list">
                    <div className=""><h4>Order List</h4></div>
                    <div className=""><h6>{user.displayName} </h6></div>
                </div>
                <div className="order-list">
                    <Table responsive="sm">
                        <thead>
                            <tr>                                
                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Service</th>
                                <th>Pay With</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        
                        <tbody> 
                            {orderList.map(pd=>                          
                                <tr>                                
                                    <td>{pd.displayName}</td>
                                    <td>{pd.email}</td>
                                    <td>{pd.name}</td>
                                    <td>{pd.card}</td>
                                    <td>Pending</td>
                                </tr>
                            )}
                        </tbody>
                        
                    </Table>
                    </div>
            </div>
        </div>
 
    );
};

export default OrderList;
