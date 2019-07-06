import React from "react";
import { Container } from "reactstrap";

export default function Empty() {
  return (
    <Container fliud>
      <div className="empty">
        <h1>No Content</h1>
      </div>
      <style jsx>
        {`
          .empty {
            min-height: 60vh;
            position: relative;
          }
          .empty h1 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translateX(-50%) translateY(-50%);
          }
        `}
      </style>
    </Container>
  );
}
