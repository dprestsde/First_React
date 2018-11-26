import React, { Component } from 'react';
import logo from './logo.svg';
import Menu from './components/MenuComponment';

import './App.css';
import { DISHES } from './shared/dishes';

import { Navbar, NavbarBrand } from 'reactstrap';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
   }

   render(){
      return(
	<div> 
		<Navbar dark color="primary">
			<div ClassName="container">
		  <NavbarBrand href="/">Ristorante ConFusion</NavbarBrand>
                        </div>
		</Navbar>
                   <Menu dishes={this.state.dishes} />
	</div>);
}
 }


export default App;
