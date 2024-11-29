import './App.css';
import React, { useState } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
  const [dishes] = useState(DISHES);

  return (
    <div>
      <Navbar dark color="primary" expand="md">
        <div className="container">
          <NavbarBrand href="/">
            <img
              src="Icon.png"
              alt="Logo do Restaurante"
              style={{ width: '30px', height: '30px', marginRight: '10px' }}
            />
            Ristorante Con Fusion
          </NavbarBrand>
          <div>Alunos: Joelysom Alcantara da Silva & José Lucas Luiz</div>
        </div>
      </Navbar>
      <Menu dishes={dishes} />
    </div>
  );
}

export default App;
