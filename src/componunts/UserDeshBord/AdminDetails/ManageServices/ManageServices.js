import React, { useContext, useEffect, useState }  from 'react';
import './ManageServices.css';
import { Table } from "react-bootstrap";
import SpinerLoader from "../../../SpinerLoader/SpinerLoader";

import Sidebar from '../../Sidebar/Sidebar';
import { userContext } from '../../../../App';

const ManageServices = () => {
    const { user } = useContext(userContext);
     

    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://arcane-refuge-91321.herokuapp.com/manageProduct")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const removeItems = () => {
        fetch("https://arcane-refuge-91321.herokuapp.com/manageProduct")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    //delete procduct
    const handleDeleteProduct = (id) => {
        fetch(`https://arcane-refuge-91321.herokuapp.com/delete/${id}`, {
            method: "DELETE",
            headers: {
                "Containt-Type": "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    removeItems();
                }
            });
    };
    return (
        <div>
                <Sidebar/>
          
            <div className="content">
                <div className="d-flex justify-content-between order-list">
                    <div className=""><h4>Manage Services</h4></div>
                    <div className=""><h6>{user.displayName}</h6></div>
                </div>
                <div className="order-list">
                
                    <Table>
                        <thead>
                            <tr>                                
                                <th>Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.length === 0 ? (
                                <SpinerLoader />
                                    ) : (products.map(pd=>

                                    <tr>                             
                                        <td>{pd.name}</td>
                                        <td>{pd.price}</td> 
                                        <td className="manage-product-delete" onClick={() => { handleDeleteProduct(pd._id)}}>                                               
                                            <button>Delete</button>                                          
                                        </td>                                          
                                    </tr>
                                
                                ))
                            }
                            
                        </tbody>
                    </Table>
                    
                </div>
            </div>          
            
        </div>
        
    );
};

export default ManageServices;