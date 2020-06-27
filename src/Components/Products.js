import React from 'react';
import { Image,Container,Row,Col,CardColumns } from 'react-bootstrap';
import ProductDescription from './ProductDescription';
import c1produit1 from '../shared/c1produit1.png';
import c1produit2 from '../shared/c1produit2.jpg';
import c1produit3 from '../shared/c1produit3.jpg';
import c1produit4 from '../shared/c1produit4.jpg';
import c2produit1 from '../shared/c2produit1.jpg';
import c2produit2 from '../shared/c2produit2.jpg';
import c2produit3 from '../shared/c2produit3.jpg';
import c2produit4 from '../shared/c2produit4.jpg';



function Products() {
	return(
		<div className="container-fluid content-row">

		<div className="row">
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c1produit1}/>
			</div>
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c1produit2} />
			</div>
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c1produit3}/> 
			</div>
			<div className="col-sm-12 col-lg-3">		
			<ProductDescription image={c1produit4} />
			</div>
		</div>
		
	
		<div className="row">
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c2produit3} />
			</div>
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c2produit4} />
			</div>
			<div className="col-sm-12 col-lg-3">
			
			<ProductDescription image={c2produit1} />
			</div>
			<div className="col-sm-12 col-lg-3">
			<ProductDescription image={c2produit2} />
			</div>
				
			
			
			
	</div>		
	
		
		</div>	
		
			
	
		
		
	
		
		
		
	
	
		
		);
}

export default Products;