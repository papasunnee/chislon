import React from "react";

const Vision = () => {
  return (
    <div className="container">
      <div className="row my-5">
        <div className="col-lg-6 pl-0">
          <div className="content">
            <h5 className="text-center">Vision</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet? Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
        </div>
        <div className="col-lg-6 pr-0">
          <div className="content">
            <h5 className="text-center">Mission</h5>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
              deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
              possimus illo atque impedit cupiditate dicta repudiandae laborum
              deleniti vitae suscipit amet? Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.Duis
              aute irure dolor in reprehenderit in voluptate velit esse cillum
              dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
              non proident, sunt in culpa qui officia deserunt mollit anim id
              est laborum.
            </p>
          </div>
        </div>
      </div>
      <div className="row mt-5 skyBlue p-5">
        <div>
          <div className="col-lg-6">
            <div className="managment">
              <h5 className="">MANAGEMENT TEAM</h5>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi
                deserunt cum odio tempora tempore! Magnam minima quos obcaecati,
                possimus illo atque impedit cupiditate dicta repudiandae laborum
                deleniti vitae suscipit amet? Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est
                laborum.Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia
                deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          {TeamMember.map(({ name, title }, key) => (
            <div className="col-lg-3 my-3" key={key}>
              <div className="member">
                <img
                  src="/static/images/about/team.png"
                  className="img-fluid bg-white"
                />
                <h6 className="name text-center mt-3 mb-0">{name}</h6>
                <p className="title text-center">{title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .content {
            background-color: #f2f2f2;
            padding: 20px;
          }
          .content h5,
          .managment h5 {
            color: #003e52;
            font-weight: 600;
          }
          .skyBlue {
            background-color: #d7deed;
          }

          .member .title {
            text-transform: uppercase;
            font-weight: 700;
            font-size: 12px;
          }
          .member .name {
            color: #0077b5;
            font-weight: 300;
          }
        `}
      </style>
    </div>
  );
};

export default Vision;

const TeamMember = [
  { name: "Consectetur Adipiscing", title: "Commodo Consequat" },
  { name: "Consectetur Adipiscing", title: "Commodo Consequat" },
  { name: "Consectetur Adipiscing", title: "Commodo Consequat" },
  { name: "Consectetur Adipiscing", title: "Commodo Consequat" }
];
