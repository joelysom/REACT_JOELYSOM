import './App.css';
import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { Navbar, NavbarBrand, Button } from 'reactstrap';
import Menu from './components/MenuComponent';
import { DISHES } from './shared/dishes';

function App() {
  const [dishes] = useState(DISHES);
  const [cart, setCart] = useState([]);

  // Função para adicionar um prato ao carrinho
  const addToCart = (dish) => {
    setCart([...cart, dish]);
  };

  // Função para exibir os itens do carrinho
  const renderCart = () => (
    <div>
      <h4>Carrinho</h4>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - {item.price}
          </li>
        ))}
      </ul>
    </div>
  );

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
          <div>Alunos: Joelysom Alcantara da Silva</div>
        </div>
      </Navbar>
      <div className="container mt-4">
        {renderCart()}
        <Menu dishes={dishes} addToCart={addToCart} />
      </div>
    </div>
  );
}

export default App;
