import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Header() {
  return (
    <Container maxWidth={100}>
      <CssBaseline />

      <Grid container spacing={2} className={'navbar'}>
        <Grid item xs={6}>
          <h1>SIMPLESTORE</h1>
        </Grid>
        <Grid item xs={6}>
          <h1>LOGO 2</h1>
        </Grid>
      </Grid>

   
      <style jsx global>{`
        .navbar {
          border-bottom: 1px solid #c1c1c1;
          padding-top: 5px;
        }
        .bannerhero {
          width: 100%;
        }
      `}</style>

    </Container>
  )
}