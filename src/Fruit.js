import React from "react";
import { Card , CardImg , CardBody , CardText , CardTitle  } from "reactstrap";

function Fruit(props) {
  return (
      <Card id={props.id} className="my-2 col-4 m-4">
        <CardImg
          alt="Card image "
          src={props.img}
          style={{
            height: 180,
          }}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">{props.title}</CardTitle>
          <CardText>
            {props.text}
          </CardText>
          <CardText>
            <small className="text-muted">{props.textMuted}</small>
          </CardText>
        </CardBody>
      </Card>
  );
}

export default Fruit;
