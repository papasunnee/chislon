import "./index.scss";

const Index = props => {
  return (
    <div>
      <div style={{ position: "relative" }}>
        <img
          src={`/static/latestnews/${props.image}.png`}
          alt=""
          width="100%"
          height="100%"
        />
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
        </div>
      </div>
      <style jsx>
        {`
          img {
            transition: 0.5s;
          }
          img:hover {
            filter: grayscale(50%);
          }
        `}
      </style>
    </div>
  );
};

export default Index;
