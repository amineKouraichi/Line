import React, {Component} from 'react';
import About from './About';
import Home from './Home';
import Contact from './Contact';
import Products from './Products';
import Header from './Header';
import Footer from './Footer';
import Cart from './Cart';
import Projects from './Projects';
import ProductDescription from './ProductDescription';
import {Switch,Route,Redirect,withRouter } from 'react-router-dom';

class Main extends Component {



	render(){
		return(
		  <div>
		  	<Header/>
		  	<Switch>
          		<Route path="/home" component={Home} style={{backgroundColor: '#F26B50'}} />
          		<Route path="/products" component={Products}/>
          		<Route path="/about" component={About}/>
          		<Route path="/contact" component={Contact}/>
				  <Route path="/projects" component={Projects}/>
				<Route path="/cart" component={Cart}/>
				<Route path="/productdescription" component={ProductDescription}/>
         		 <Redirect to = "/home"  />
       	 	 </Switch>
       	 	 <Footer/>
       	  </div>
			)
	}}


export default withRouter(Main);

