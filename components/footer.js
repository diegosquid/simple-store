import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default function Footer() {
  return (
    <Container maxWidth={100}>
      <CssBaseline />

      <Grid container spacing={2} className={'footer'}>
        <Grid item md={4}>
          <h2>Sobre a Loja</h2>
          <p>A AZARASHOP nasceu em 2019, inspirada em criar algo novo, nossa missão é transformar o modo de consumir. Sempre em busca de tendências internacionais, trazemos aos nossos clientes produtos diretamente do exterior. Atentos à novidades de estilo, nossos produtos vão desde acessórios, vestuário, produtos de cuidados pessoais e tecnológicos.</p>
        </Grid>
        <Grid item md={4} className="footerlinks">
          <h2>Institucional</h2>
          <a>Sobre a Loja</a>
          <a>Fale Conosco</a>
          <a>Compra Segura</a>
          <a>Prazo de Entrega</a>
          <a>Política de Trocas e Devoluções</a>
          <a>Termos e Condições de Uso</a>
          <a>Rastrear Pedido</a>
          <a>Termos de serviço</a>
          <a>Política de reembolso</a>
        </Grid>
        <Grid item md={4}>
          <h2>Atendimento ao Cliente</h2>
          <p>Segunda à sexta das 08:00 às 18:00</p>
          <p>sac@simplestore.com</p>
          <br />
          <br />
          <h2>Whatsapp</h2>
          <p>(19) 3123213-2313</p>
        </Grid>
      </Grid>

      <Grid container spacing={2} className={'footerbar'}>
        <Grid item md={6}>
          <p>Simple Store - CNPJ 32.117.328/0001-89
          <br />Rua Papa João XXIII, 29 - Vila Melo, Mogi Mirim - SP, 13800-380</p>
        </Grid>

        <Grid item md={6}>
          <p>A Azarashop garante segurança para suas informações pessoais e financeiras
          <br />Copyright 2021 © Todos os direitos reservados à Azarashop</p>
        </Grid>
      </Grid>

      <style jsx global>{`
        .footer {
          padding-left: 2rem;
          padding-right: 2rem;
          padding-top: 5px;
          background: #f6f6f8;
          border-bottom: 1px solid #c1c1c1;
        }
        .footerlinks {
          display: flex;
          flex-direction: column;
        }
        .footerlinks a {
          line-height: 150%;
          height: 30px;
        }
        .footerbar {
          padding-left: 2rem;
          padding-right: 2rem;
         
        }
      `}</style>

    </Container>
  )
}