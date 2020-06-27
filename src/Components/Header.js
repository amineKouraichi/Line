import React,  { Component } from 'react';
import { Navbar,Nav, NavbarToggler ,Collapse,NavItem, NavbarBrand, Jumbotron, Container} from 'reactstrap';
import Image from 'react-bootstrap/Image';
import { NavLink} from 'react-router-dom';
import logo from '../shared/logo.jpg';
class Header extends Component{
	constructor(props){
		super(props);
		this.state={
			isNavOpen: false,
		};
		this.toggleNav=this.toggleNav.bind(this);
	}
	toggleNav(){
		this.setState({isNavOpen: !this.state.isNavOpen});
	}

	render(){
		return(
			
				<Navbar dark  className="center-navbar" expand="md">
         			 <div className="col-12 container">
         			 <NavbarToggler onClick={this.toggleNav}/>
         		     <NavbarBrand className="mr-auto" >
         		     </NavbarBrand>
         		     	<Collapse isOpen={this.state.isNavOpen} navbar>
	         		     	<Nav className="navbar navbar-nav " text-color="yellow">
	         		     		<NavItem className= "container-fluid bg-yellow " >
	         		     			<NavLink className="nav-link" to="/about">
	         		     				 À propos
	         		     			</NavLink>
	         		     			<NavLink className="nav-link" to="/projects">
	         		     				 Projets
	         		     			</NavLink>
									  <NavLink className="nav-link " to="/home">
	         		     				 <Image src={logo}  alt="Les Funambules de Tunis" height="80" width="80" roundedCircle fluid/>
	         		     			</NavLink>
									  <NavLink className="nav-link " to="/Products">
	         		     				 Produits
	         		     			</NavLink>
	         		     			<NavLink className="nav-link" to="/contact">
	         		     				  Contact
	         		     			</NavLink>
									  
	         		     		</NavItem>
	         		     	</Nav>
         		     	</Collapse>
         			 </div>
        		</Navbar>
        		
    

			);
	}
}

export default Header;