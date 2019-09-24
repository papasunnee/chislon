import React from "react";
import CookieConsent, { Cookies } from "react-cookie-consent";

export default () => {
  return (
    <CookieConsent
      location="bottom"
      buttonText="ACCEPT COOKIES"
      cookieName="chislon"
      contentStyle={{
        color: "#fff",
        margin: 0,
        paddingLeft: "10px"
      }}
      style={{
        background: "#242424",
        zIndex: 99999999999,
        color: "#fff",
        padding: 0,
        margin: 0
      }}
      buttonStyle={{
        color: "#242424",
        fontWeight: 700,
        fontSize: "16px",
        background: "#ffd42d",
        border: "0",
        borderRadius: "0px",
        boxShadow: "none",
        cursor: "pointer",
        flex: "0 0 auto",
        padding: "25px",
        margin: 0
      }}
      expires={150}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam,
      {/* <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span> */}
    </CookieConsent>
  );
};
