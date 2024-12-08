import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

const Menu = ({ dishes, addToCart }) => {
  const [selectedDish, setSelectedDish] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
    setModalOpen(true);
  };

  const toggleModal = () => setModalOpen(!modalOpen);

  const menu = dishes.map((dish) => (
    <div className="col-6 col-md-4 col-lg-3 p-2" key={dish.id}>
      <Card className="dish-card" onClick={() => onDishSelect(dish)}>
        <CardImg src={dish.image} alt={dish.name} className="dish-card-img" />
        <CardImgOverlay className="dish-card-overlay">
          <CardTitle className="dish-card-title">{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row justify-content-center">{menu}</div>
      {selectedDish && (
        <DishDetail
          dish={selectedDish}
          isOpen={modalOpen}
          toggle={toggleModal}
          addToCart={addToCart} // Passa a função para o componente modal
        />
      )}
    </div>
  );
};

export default Menu;
