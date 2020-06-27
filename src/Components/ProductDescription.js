import React from 'react';
import {Image,Card,Button} from 'react-bootstrap';

function ProductDescription(props) {
	return(
		<Card style={{width: '320', height: 'auto', margin:'10px' }} >
			<Card.Header as="h5">Lampe XXXX</Card.Header>
			<Card.Body>
			
			<Card.Img src={props.image} className="cardImg" />
		
			<Card.Title>Special title treatment</Card.Title>
   	 	<Card.Text>
     		 With supporting text below as a natural lead-in to additional content.
    		</Card.Text>
    		<span style={{backgroundColor:'lightgray'}}> 120 TND</span>
			
        
		</Card.Body>
    	</Card>

		
		);
}

export default ProductDescription;