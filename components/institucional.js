import Header from "./header"
import Footer from "./footer"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from "react";

export default function Institucional(props) {
  return (
    <React.Fragment>

    <Header />

    <h3 className="pagetitle">{props.title}</h3>

    <Container maxWidth="lg" className="container">
    
      {props.children}

    </Container>

    <Footer />

    <style jsx global>{`
      .section-title {
        text-align: center;
      }
      .bannerhero {
        width: 100%;
      }
      .pagetitle {
        min-height: 5rem;
        display: flex;
        background: #e4e4e4;
        margin: 0;
        justify-content: center;
        align-items: center;
      }
      .container {
        margin-top: 3rem;
        margin-bottom: 3rem
      }
    `}</style>
    </React.Fragment>
  )
}