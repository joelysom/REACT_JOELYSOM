import React from 'react';
import { Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';

const DishDetail = ({ dish }) => {
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
  
    // Iterar sobre a lista de comentários
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
  
    // Retornar todos os comentários
    return (
      <div>
        <h4>Comentários</h4>
        <ul className="list-unstyled">{commentList}</ul>
      </div>
    );
  };    

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-md-5 m-1">{renderDish(dish)}</div>
        <div className="col-12 col-md-5 m-1">{dish ? renderComments(dish.comments) : null}</div>
      </div>
    </div>
  );
};

export default DishDetail;
