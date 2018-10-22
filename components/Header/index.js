import Link from "next/link";

export default () => (
  <div className="container navHolder">
    <nav>
      <div className="logo">
        <Link href="/">
          <a>
            <img
              src="/static/whitelogo.png"
              alt=""
              className="img img-circle"
            />
          </a>
        </Link>
      </div>
      <div>
      <span className="menu-control" onClick={navigator}>&#9776;</span>
        <ul className="menu">
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <a>Services</a>
            </Link>
          </li>
          <li>
            <Link href="/how-we-work">
              <a>How We Work</a>
            </Link>
          </li>
          <li>
            <Link href="/partners">
              <a>Partners</a>
            </Link>
          </li>
          <li>
            <Link href="/latest-news">
              <a>Latest News</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <style jsx>
      {`
        .navHolder{
          padding-top : 40px ;
        }
        .logo a img {
          width: 300px;
        }
        span.menu-control{
          color : #fff ;
          padding : 10px ;
          font-size : 2em ;
          font-weight : bolder ;
          box-sizing : border-box ;
          cursor : pointer ;
          background-color : rgba(0,0,0,0.2) ;
        }
        nav {
          display: flex;
          justify-content: space-between;
        }
        nav ul.menu {
          margin: 0;
          padding: 0px;
          background-color : rgba(0,0,0,0.3) ;
          height : 0px ;
          overflow : hidden ;

          
        }
        nav ul.menu li {
          list-style: none;
        }
        nav ul.menu li a {
          padding : 20px;
          margin : 0 ;
          display: block ;
          line-height : 0px ;
          color: #fff;
          transition: 0.5s;
        }
        nav ul.menu li a:hover {
          text-decoration: none;
          color: #e5e5e5;
        }
      `}
    </style>
  </div>
);
