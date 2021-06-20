import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

const BookingCard = () => {
    const [userOrderList, setUserOrderList]=useState([]);

    useEffect(() => {
        fetch("https://arcane-refuge-91321.herokuapp.com/bookingList")
            .then((res) => res.json())
            .then((data) => {
                setUserOrderList(data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);


    return (
        <div className="row">
            
            {userOrderList.map(pd=>
                <div className="col-md-6 col-lg-3 mb-5">
                    <Card style={{ width: '100%' }} className="card-items p-3 ">
                        <Card.Img className="img text-center" variant="top" src={pd.img}  style={{ width: '80px', height:'80px' }}/>
                        <Card.Body>
                            <Card.Title className=" text-center" >{pd.name} </Card.Title>                        
                            <Card.Text>
                            {pd.description}
                            </Card.Text>
                            <div className="d-flex justify-content-between">
                            <small className="mr-4" style={{fontSize:'25px', color:'red',fontWeight:'500'}} >${pd.price}</small>
                            <Button className="ml-4" variant="success">Pending</Button>
                            </div>
                            
                        </Card.Body>
                    </Card>
                </div>
            )}
                       
        </div>
    );
};

export default BookingCard;