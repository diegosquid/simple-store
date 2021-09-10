import Header from "../../components/header"
import Footer from "../../components/footer"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
    <Header />

    <Container maxWidth="lg" className="container">
      <Grid container spacing={2} className={'featured'}>
        <Grid item md={6}>
          <img className="productImage" src="https://picsum.photos/600/600"/>
        </Grid>

        <Grid item md={6}>
          <h2>Product Name</h2>
          <p>R$ 235,00</p>
          <p>Description</p>
          <Button className="btn buy-btn" variant="contained" color="primary">
            COMPRAR
          </Button>
        </Grid>
      </Grid>
    </Container>

    <Footer />

    <style jsx global>{`
      .container {
        margin-top: 2rem;
        margin-bottom: 2rem;
      }
      .section-title {
        text-align: center;
      }
      .btn.buy-btn {
        color: #fff;
        min-width: 300px;
      }
      .productImage {
        max-width: 100%;
      }
    `}</style>
    </React.Fragment>
  )
}