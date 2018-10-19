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
        .navHolder {
          line-height: 80px;
        }
        .logo a img {
          width: 300px;
        }
        nav {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav ul.menu {
          margin: 0;
          padding: 0;
          display: flex;
          padding-top: 10px;
        }
        nav ul.menu li {
          list-style: none;
        }
        nav ul.menu li a {
          padding: 5px 10px;
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
