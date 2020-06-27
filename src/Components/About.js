import React from 'react';
import { Player } from 'video-react';
import About_V1 from '../shared/About_V1.mp4';
function About() {
	return(
			<div className="col-12 container" align="center">
				<div className="col-8 m-5">  
	    		 <Player
	     			 playsInline
	     			 src={About_V1}
	     			 
	    		/>
	   		 </div>
			</div>
	);
}

export default About;