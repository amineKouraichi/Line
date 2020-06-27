import React from 'react';
import {Image,Container,Row,Col } from 'react-bootstrap';
import { Player } from 'video-react';
import About_V1 from '../shared/About_V1.mp4';
import p1 from '../shared/p1.jpg';


function Home(){
	return(
		<video className="background" style={{backgroundColor:'#F26B50'}}loop autoPlay>
		<source src={About_V1} type="video/mp4" />
		</video>		
	

	
	);
}

export default Home;