import React , {Component} from 'react';
import {Link} from 'react-router-dom';
import Image from 'react-bootstrap/Image';
import logo from '../shared/logo.jpg';
class Footer extends Component{
	
	render(){
		return(
			<div className="footer">
				<div className="container">
					<div className="row justify-content-center">

					<div className="col-3 justify-content-center mr-5">
					<Link className="nav-link " to="/home">
	         		<Image src={logo}  alt="Les Funambules de Tunis" height="80" width="80" roundedCircle fluid/><br/>
					<p>Les funambules de Tunis <br/> 23 Rue Kafteji, Manouba </p><br/>
	         		</Link>
					
					</div>
						<div className="col-3 align-content-center mt-3 ml-5  ">
						
					
								<Link className="link" to="/home">Accueil</Link><br/>
								<Link className="link" to= "/products">Nos produits</Link><br/>
								<Link className="link" to="/about" >À propos</Link><br/>
								<Link className="link" to="contact">Contact</Link><br/>
								<Link className="link" to="projects">Nos projets </Link>
						</div>
					<div className="col-3 justify-content-center mt-3">
					<div className="row mb-2">
							
					<span className="font-weight-bold">Trouvez nous sur <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/lfdtdesign/"><i className="fa fa-facebook "></i></a></span>
					<a className="btn btn-social-icon btn-instagram ml-1" href="https://www.instagram.com/lfdtdesign/"><i className="fa fa-instagram "></i></a><br/>
						</div>
						<div className="row ">
						<a className="font-weight-bold" href="mailto:"> <span><i className="fa fa-envelope fa-2x"></i> lesfunambules@gmail.com </span></a><br/>
					<span className="font-weight-bold mt-2" ><i className=" fa fa-phone fa-2x"></i> 24834778 </span><br/>
		   			
						</div>
					
					
					</div>
					</div>
				
					<div className="row footer-row justify-content-center">
					<p>© Copyright 2019 Les Funambules de Tunis</p>
					</div>
				</div>
			</div>
				
					
						
				);
				
			}
		}


export default Footer;