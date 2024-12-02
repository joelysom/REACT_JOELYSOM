import React from 'react';
import { Modal, ModalHeader, ModalBody, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = ({ dish, isOpen, toggle }) => {
  const renderDish = (dish) => {
    if (!dish) return <div></div>;

    const ingredientList = dish.ingredients.map((ingredient, index) => (
      <li key={index}>{ingredient}</li>
    ));

    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          <CardText>
            <strong>Preço:</strong> {dish.price}
          </CardText>
          <CardText>
            <strong>Ingredientes:</strong>
            <ul>{ingredientList}</ul>
          </CardText>
          <CardText>
            <strong>Receita:</strong> {dish.recipe}
          </CardText>
        </CardBody>
      </Card>
    );
  };

  const renderComments = (comments) => {
    if (!comments || comments.length === 0) return <div></div>;

    const commentList = comments.map((comment) => (
      <li className="comment-container" key={comment.id}>
        <p className="comment-text">"{comment.comment}"</p>
        <p>
          <span className="comment-author">-- {comment.author}</span>,{' '}
          <span className="comment-date">
            {new Date(comment.date).toLocaleDateString()}
          </span>
        </p>
      </li>
    ));

    return (
      <div>
        <h4>Comentários</h4>
        <ul className="list-unstyled">{commentList}</ul>
      </div>
    );
  };

  return (
    <Modal isOpen={isOpen} toggle={toggle}>
      <ModalHeader toggle={toggle}>{dish ? dish.name : 'Detalhes do Prato'}</ModalHeader>
      <ModalBody>
        <div>{dish ? renderDish(dish) : null}</div>
        <div>{dish ? renderComments(dish.comments) : null}</div>
      </ModalBody>
    </Modal>
  );
};

export default DishDetail;
