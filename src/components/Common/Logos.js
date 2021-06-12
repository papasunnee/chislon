import React from "react";

const Partners = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            quaerat similique perspiciatis mollitia ab explicabo minima placeat.
            Autem impedit tenetur harum ut itaque a delectus atque aut
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus natus quaerat similique perspiciatis
            mollitia ab explicabo minima placeat. Autem impedit tenetur harum ut
            itaque a delectus atque aut laudantium excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            quaerat similique perspiciatis mollitia ab explicabo minima placeat.
            Autem impedit tenetur harum ut itaque a delectus atque aut
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus natus quaerat similique perspiciatis
            mollitia ab explicabo minima placeat. Autem impedit tenetur harum ut
            itaque a delectus atque aut laudantium excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            quaerat similique perspiciatis mollitia ab explicabo minima placeat.
            Autem impedit tenetur harum ut itaque a delectus atque aut
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus natus quaerat similique perspiciatis
            mollitia ab explicabo minima placeat. Autem impedit tenetur harum ut
            itaque a delectus atque aut laudantium excepturi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            quaerat similique perspiciatis mollitia ab explicabo minima placeat.
            Autem impedit tenetur harum ut itaque a delectus atque aut
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus natus quaerat similique perspiciatis
            mollitia ab explicabo minima placeat. Autem impedit tenetur harum ut
            itaque a delectus atque aut laudantium excepturi.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partners;

export const Logos = () => {
  return (
    <>
      <div className="col-md-12 my-4">
        <div className="logos">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(
            (img, index) => {
              return (
                <div
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src={`static/images/partners/${img}.png`}
                    key={index}
                    className="img-fluid"
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
      <style jsx>{`
        .logos {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin: auto;
        }
        .logos img {
          width: auto;
          margin: 10px;
          transition: filter 0.5s cubic-bezier(0.17, 0.67, 0.93, 0.28);
        }
        .logos img:hover {
          filter: grayscale(70%);
        }
      `}</style>
    </>
  );
};
