import React from "react";
import Card from "react-bootstrap/Card";

function Players(props) {
    return (
        // <Card style={{ width: "18rem" }}>
        //     <Card.Img className="image" variant="top" src={props.url} />
        //     <Card.Body>
        //         <Card.Title>{props.nom}</Card.Title>
        //         <Card.Title>{props.equipe}</Card.Title>
        //         <Card.Title>{props.nationalite}</Card.Title>
        //         <Card.Title>{props.age}</Card.Title>
        //     </Card.Body>
        // </Card>
        <div>
        <h1> {props.nom} </h1>
        </div>
    );
}
export default Players;




