import React,{Component} from 'react';
import Projett1_V2 from'../shared/Projett1_V2.mp4';
import { Player } from 'video-react';
import {Image,Card} from 'react-bootstrap';

class Contact extends Component{

	constructor(props) {
		super(props);
		this.state = {
		  name: '',
		  email: '',
		  message: ''
		}
	  }

	  handleSubmit(e) {
		e.preventDefault();
	
		fetch('http://localhost:3002/send',{
			method: "POST",
			body: JSON.stringify(this.state),
			headers: {
			  'Accept': 'application/json',
			  'Content-Type': 'application/json'
			},
		  }).then(
			(response) => (response.json())
		   ).then((response)=>{
		  if (response.status === 'success'){
			alert("Message Sent."); 
			this.resetForm()
		  }else if(response.status === 'fail'){
			alert("Message failed to send.")
		  }
		})
	  }
	  resetForm(){
		
		 this.setState({name: '', email: '', message: ''})
	  }
	
	render() {
	 return(
	
		<div className="container contact mb-5 mt-5">
		
			<div className="flex-row d-flex justify-content-center">
			<div className="  d-flex align-self-stretch  m-5">	
			<Card className= "carta" >
			<Card.Header as="h5">Vous voulez lancer une commande?</Card.Header>
			<Card.Body>
			<Card.Title>Vous aimez échanger à vive voix?</Card.Title>		
   	 		<Card.Text>
				<span className="font-weight-bold mt-2" ><i className=" fa fa-phone fa-2x"></i> 24834778 </span>
    		</Card.Text>
			<Card.Title> Vous préférez les social media?</Card.Title>
				
   	 		<Card.Text>
				<span className="font-weight-bold"> <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/lfdtdesign/"><i className="fa fa-facebook "></i> </a> 					<a className="btn btn-social-icon btn-instagram ml-1" href="https://www.instagram.com/lfdtdesign/"><i className="fa fa-instagram "></i></a><br/> </span>
    		</Card.Text>
			<Card.Title>Vous êtes plûtot professionnel?</Card.Title>
			<Card.Title></Card.Title>
    		<Card.Text><p className="font-weight-bold" href="mailto:"> <span><i className="fa fa-envelope fa-2x"></i> lesfunambules@gmail.com </span></p><br/></Card.Text>
			
        
		</Card.Body>
				</Card >
				</div>
				
				<div className=" d-flex  align-self-stretch  m-5">
				<Card className="carta">
					<Card.Header as ="h5"> Envie de nous laisser un message?</Card.Header>
					<Card.Body>

					<div className="row justify-content-center">
	   <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
		<div className="form-group">
			<label htmlFor="name">Votre nom complet</label>
			<input type="text" className="form-control" value={this.state.name} onChange={this.onNameChange.bind(this)} />
		</div>
		<div className="form-group">
			<label htmlFor="exampleInputEmail1">Votre adresse email</label>
			<input type="email" className="form-control" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
		</div>
		<div className="form-group">
			<label htmlFor="message">Exprimez vous!</label>
			<textarea className="form-control" rows="5" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
		</div>
		<button type="submit" className="btn btn-primary">Envoyer</button>
		</form>
		</div>
					</Card.Body>
				</Card>
				</div>
			</div>
		</div>

	   
);
	}
	
	
	  onNameChange(event) {
		this.setState({name: event.target.value})
	  }
	
	  onEmailChange(event) {
		this.setState({email: event.target.value})
	  }
	
	  onMessageChange(event) {
		this.setState({message: event.target.value})
	  }
	
	 
	
}

export default Contact;