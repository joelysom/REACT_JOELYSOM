import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

const Menu = ({ dishes }) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const renderDish = (dish) => {
    if (dish) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
            <CardText>
              <strong>Preço:</strong> {dish.price}
            </CardText>
          </CardBody>
        </Card>
      );
    }
    return <div></div>;
  };

  const menu = dishes.map((dish) => (
    <div className="col-12 col-md-5 m-1" key={dish.id}>
      <Card onClick={() => onDishSelect(dish)}>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </div>
  ));

  return (
    <div className="container">
      <div className="row">{menu}</div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(selectedDish)}</div>
      </div>
    </div>
  );
};

export default Menu;
