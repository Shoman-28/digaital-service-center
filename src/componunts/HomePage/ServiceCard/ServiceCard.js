import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './card.css';

const ServiceCard = () => {
    const history = useHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://arcane-refuge-91321.herokuapp.com/productServices")
            .then((res) => res.json())
            .then((data) => {
                setProducts(data.splice(1,3));
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const handleOrderNow =(id)=>{
        history.push('/buyProcuct/' + id);
        console.log(id)
    }
    

    return (
        <div className="row">          
            
                { products.map(pd => 
                   <div className="col-md-4">
                   <div className=" mb-3 allService-card">                        
                       <Card className="card-items">
                           <Card.Img
                           className="img"
                           variant="top"
                           src={pd.img}
                           style={{ width: "80px", height: "80px" }}
                           />
                           <Card.Body>
                           <Card.Title className="text-center">{pd.name}</Card.Title>
                           <Card.Text>
                               Some quick example text to build on the card title and make
                               up the bulk of the card's content.
                           </Card.Text>
                           
                           <div className="d-flex justify-content-between">
                           <small
                               className="mr-0"
                               style={{
                               fontSize: "20px",
                               color: "red",
                               fontWeight: "500",
                               }}
                           >
                               ${pd.price}
                           </small>
                               <Button
                               className="allService-price"
                               variant="success"
                               onClick={() => handleOrderNow(pd._id)}
                           >
                               Order Now
                           </Button>
                           </div>
                           </Card.Body>
                       </Card>
                   </div>
               </div>
                    )}
            
           

        </div>
    );
};

export default ServiceCard;