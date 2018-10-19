import "./index.scss";

const Index = props => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img src="/static/latestnews/1.png" alt="" width="100%" height="100%" />
        <div
          style={{
            position: "absolute",
            bottom: "0",
            backgroundColor: "rgba(47,59,70,0.9)",
            padding: "5px",
            paddingBottom: "0px"
          }}
        >
          <h6 style={{ color: "#CEA600" }}>
            Sed ut perspiciatis unde omnis iste natus
          </h6>
          <p style={{ color: "#fff", fontSize: "12px" }}>
            Ut porttitor ut est eu ornare. In metus dui, suscipit at viverra
            faucibus, accumsan at odio. Duis finibus sollicitudin libero, sed
            tempor diam euismod sed. Sed interdum odio a finibus gravida.
            Aliquam tincidunt nisl nec urna euismod, ullamcorper scelerisque
            magna vulputate. Duis finibus sollicitudin libero, sed tempor
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
