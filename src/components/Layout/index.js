import React, { Fragment } from "react";
import { PageTransition } from "next-page-transitions/lib";
import NavBar from "../NavBar";
import Footer from "../Footer";
import Loader from "../Loader";

const TIMEOUT = 400;

const Index = props => {
  return (
    <Fragment>
      <div className="container-fluid p-0">
        <NavBar />
        {/* <PageTransition
          timeout={TIMEOUT}
          classNames="page-transition"
          loadingComponent={<Loader />}
          loadingDelay={500}
          loadingTimeout={{
            enter: TIMEOUT,
            exit: 0
          }}
          loadingClassNames="loading-indicator"
        > */}
        {props.children}
        {/* </PageTransition> */}
        <Footer />
      </div>
      <style jsx global>{`
        .page-transition-enter {
          opacity: 0;
          transform: translate3d(0, 20px, 0);
        }
        .page-transition-enter-active {
          opacity: 1;
          transform: translate3d(0, 0, 0);
          transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
        }
        .page-transition-exit {
          opacity: 1;
        }
        .page-transition-exit-active {
          opacity: 0;
          transition: opacity ${TIMEOUT}ms;
        }
        .loading-indicator-appear,
        .loading-indicator-enter {
          opacity: 0;
        }
        .loading-indicator-appear-active,
        .loading-indicator-enter-active {
          opacity: 1;
          transition: opacity ${TIMEOUT}ms;
        }
      `}</style>
    </Fragment>
  );
};
export default Index;
