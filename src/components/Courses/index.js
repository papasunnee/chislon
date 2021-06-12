import React from "react";
import { Link } from "react-scroll";

const InternationalPartners = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 my-5">
          <h4>Courses</h4>
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
        <div className="col-md-12 my-5">
          <h4>Courses List</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus natus
            quaerat similique perspiciatis mollitia ab explicabo minima placeat.
            Autem impedit tenetur harum ut itaque a delectus atque aut
            laudantium excepturi. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Minus natus quaerat similique perspiciatis
            mollitia ab explicabo minima placeat. Autem impedit tenetur harum ut
            itaque a delectus atque aut laudantium excepturi.
          </p>
          <div className="coursesWrapper">
            {coursesList &&
              coursesList.map((course, index) => (
                <div className="courseBox">
                  <img src={`/static/images/courseslogo/${course.logo}`} />
                  <div>
                    <h4>{course.title}</h4>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Minus natus quaerat similique perspiciatis mollitia ab
                      explicabo minima placeat. Autem impedit tenetur harum ut
                      itaque a delectus atque aut laudantium excepturi. Lorem
                      ipsum dolor sit amet consectetur adipisicing elit. Minus
                      natus quaerat similique perspiciatis mollitia ab explicabo
                      minima placeat. Autem impedit tenetur harum ut itaque a
                      delectus atque aut laudantium excepturi.
                    </p>
                    <Link
                      to="courseForm"
                      activeClass="active"
                      spy={true}
                      smooth={true}
                      offset={-70}
                      duration={200}
                      key={index}
                    >
                      <button className="btn btn-primary">
                        Register Below
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <style>{`
      .courseBox{
          margin : 50px 0px; 
          position : relative ;
      }
      .courseBox::after {
        content: "";
        clear: both;
        display: table;
      }
      .courseBox img{
          float : left ;
          padding : 10px;
          margin-right : 10px ;
          margin-bottom : 10px ;
          border : 1px solid #e2e2e2 ;
          max-width: 250px ;
      }
      @media only screen and (max-width: 600px) {
        .courseBox img{
            float : none ;
            display : block;
            margin : 20px auto ;
            
        }
      } 
      `}</style>
    </div>
  );
};

export default InternationalPartners;

export const coursesList = [
  { title: "IELTS", logo: "ielts.png", description: "" },
  { title: "TOEFL", logo: "toefl.gif", description: "" },
  { title: "DUOLINGO", logo: "duolingo.png", description: "" },
  { title: "GRE", logo: "gre.jpg", description: "" },
  { title: "NCLEX", logo: "nclex.jpg", description: "" },
  { title: "CGFNS", logo: "cgfns.jpg", description: "" },
];
