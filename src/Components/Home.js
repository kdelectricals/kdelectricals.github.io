import React from "react";
import phone from "../Assets/phone.png";
import light from "../Assets/light.jpg";

import logo from "../Assets/logo.png";
//import phone from "../Assets/phone.png";

const Home = () => {
  return (
    <>
      <div
        style={{
          backgroundColor: "#e6f9ff",
          width: "100%",
        }}
      >
        <div
          style={{
            height: 120,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <>
              <img
                src={logo}
                style={{
                  height: 80,
                  width: 130,
                  marginTop: 20,
                  marginLeft: 100,
                }}
                alt="logo"
              />
              <p
                style={{
                  marginTop: 30,
                  fontSize: 50,
                  color: "#130e07",
                  fontWeight: "500",
                }}
              >
                KD ELECTRICALS
              </p>
            </>
            <div
              style={{
                marginLeft: "auto",
                marginRight: 400,
                display: "flex",
                flexDirection: "row",
                marginTop: 35,
              }}
            >
              <img
                src={phone}
                style={{
                  height: 20,
                  width: 20,
                  marginTop: 15,
                }}
                alt="phone"
              />
              <p style={{ color: "#000000", marginLeft: 10 }}>7249092499</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ marginTop: -20, width: "100%" }}>
        <img
          src={light}
          style={{
            height: 700,
            width: "100%",
            marginTop: 15,
          }}
          alt="light"
        />
        <div
          style={{
            margin: "auto",
            width: "100%",
          }}
        >
          <p
            style={{
              marginTop: -600,
              fontSize: 60,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            We are Independent Electrical Wholesaler
          </p>
          <p
            style={{
              marginTop: 100,
              fontSize: 40,
              color: "#ffffff",
              textAlign: "center",
            }}
          >
            Serving the electrical needs
          </p>

          <div
            style={{
              backgroundColor: "#ffffff",
              height: 40,
              width: 200,
              position: "relative",
              alignItems: "center",
              margin: "auto",
              // display: "flex",
            }}
          >
            <p
              style={{
                marginTop: 100,
                fontSize: 20,
                color: "#000000",
                textAlign: "center",
              }}
            >
              Enquire Now
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
