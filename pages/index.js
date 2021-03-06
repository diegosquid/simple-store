import Header from "../components/header"
import Footer from "../components/footer"
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <React.Fragment>
    <Header />

    <Grid container spacing={2}>
      <Grid item xs>
        <Image alt="img0" className="bannerhero" src="https://picsum.photos/1024/400" />
      </Grid>
    </Grid>

    <Container maxWidth="lg">
      <Grid container spacing={2} className={'featured'}>
        <Grid item xs={12}>
          <h2 className="section-title">Os mais vendidos</h2>
        </Grid>

        <Grid item xs={3}>
          <Image alt="img1" src="https://picsum.photos/200/300"/>
        </Grid>

        <Grid item xs={3}>
          <Image alt="img2" src="https://picsum.photos/200/300"/>
        </Grid>

        <Grid item xs={3}>
          <Image alt="img3" src="https://picsum.photos/200/300"/>
        </Grid>

        <Grid item xs={3}>
          <Image alt="img4" src="https://picsum.photos/200/300"/>
        </Grid>
      </Grid>
    </Container>

    <Footer />

    <style jsx global>{`
      .section-title {
        text-align: center;
      }
    `}</style>
    </React.Fragment>
  )
}
