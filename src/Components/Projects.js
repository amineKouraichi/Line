import React from 'react';
import { Player } from 'video-react';
import Projet1_V1 from '../shared/Projet1_V1.mp4';


function Projects() {
	return(
		<div className="container col-12" align="center" >
			<div className="col-8 md-5 m-5" >
				 <Player
     				 playsInline
      				 src={Projet1_V1}
   		 		/>
   			</div>
   			
		 

    	</div>

		
		);
}

export default Projects;