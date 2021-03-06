import React from "react";
import { Card, CardContent, Button } from "@material-ui/core";

const OrderCard = (props) => {
  const takeOrder = () => {
    props.setPrice((1 - props.price).toFixed(1));
    props.setQuantity(props.quantity);
    props.setPosition();
  };

  return (
    <Card
      style={{ margin: 5, boxShadow: "none", border: "1px solid #00000060" }}
    >
      <CardContent style={{ padding: "4px 16px" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <span style={itemSpan}>
            <img
              alt="icon"
              src={process.env.PUBLIC_URL + "/images/tz-icon.png"}
              width="20"
            />
            <span style={{ fontWeight: "bold", marginLeft: 10 }}>
              {props.price}
            </span>
          </span>

          <span style={{ ...itemSpan, marginRight: "200px" }}>
            <span
              style={{ fontSize: 20, color: "black" }}
              className="material-icons"
            >
              local_mall
            </span>

            <span style={{ fontWeight: "bold", marginLeft: 10 }}>
              {props.quantity}
            </span>
          </span>
          <Button onClick={() => takeOrder()} color="primary">
            Take
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

const itemSpan = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default OrderCard;
