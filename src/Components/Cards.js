import { Grid, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";

import multipleUsers from "../assets/multipleUsers.png";
import fastResponses from "../assets/fastResponses.png";
import reports from "../assets/reports.png";

import {
  AccountTreeOutlined,
  BadgeOutlined,
  ForumOutlined,
} from "@mui/icons-material";

const Cards = ({ CardSubtitleTypography, TextTypography, CardBox }) => {
  return (
    <Grid container spacing={12} sx={{ paddingBottom: "200px" }}>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={multipleUsers} alt="" />
        </Box>

        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Multiplos atendentes</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Cadastre toda a sua equipe no Whatsticket. Cada atendente recebe o
            atendimento de forma organizada, e você pode acompanhar todos eles
            em tempo real.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={fastResponses} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>Respostas rápidas</CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Chega de ficar repetindo a mesma mensagem várias vezes. Basta
            digitar “/” para acessar a sua lista de mensagens pré cadastradas.
          </TextTypography>
        </Stack>
      </Grid>
      <Grid item md={4} xs={12}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img src={reports} alt="" />
        </Box>
        <Stack direction="column" spacing={2}>
          <CardSubtitleTypography>
            Relatório de atendimentos
          </CardSubtitleTypography>

          <TextTypography sx={{ textAlign: "center" }}>
            Tenha uma visão geral do tempo de resolução, tempo para a primeira
            resposta e quantidade de atendimentos, com gráficos por período,
            atendente, filas e conexões.
          </TextTypography>
        </Stack>
      </Grid>

      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <AccountTreeOutlined
                color="primary"
                fontSize="large"
              ></AccountTreeOutlined>
              Separação de departamentos
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Cada ticket pode ser atribuído a uma fila de atendimento,
              facilitando a organização e priorização dos atendimentos.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>
      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <BadgeOutlined color="primary" fontSize="large"></BadgeOutlined>
              Identificação do atendente
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Todas as mensagens enviadas pelo Whatsticket levam o nome do
              atendente antes do texto. Assim o seu cliente sempre sabe com quem
              está falando.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>
      <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <ForumOutlined color="primary" fontSize="large"></ForumOutlined>
              Chatbot automatizado
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Deixe a tecnologia trabalhar por você! Crie chatbots para separar
              seus atendimentos e levantar informações importantes de forma
              automática.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>

      {/* <Grid
        item
        sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}
        lg={4}
        md={6}
        xs={12}
      >
        <CardBox sx={{ zIndex: "30", marginLeft: "auto", marginRight: "auto" }}>
          <Stack
            sx={{ marginLeft: "auto", marginRight: "auto", width: "250px" }}
            direction="column"
            spacing={2}
          >
            <CardSubtitleTypography>
              <ForumOutlined color="primary" fontSize="large"></ForumOutlined>
              Transferência de chamado
            </CardSubtitleTypography>

            <TextTypography sx={{ textAlign: "center" }}>
              Transfira o ticket de atendimento para um setor ou atendente específico
              Com um clique seu cliente é transferido e já pode ser atendido pelo novo responsável.
            </TextTypography>
          </Stack>
        </CardBox>
      </Grid>
 */}
      <Box
        sx={{
          zIndex: "10",

          marginLeft: "110px",
          marginRight: "-100px",

          width: "90%",
          height: "138px",
          marginTop: "-80px",

          backgroundColor: "#00ccff",

          borderRadius: "82px 82px 82px 82px",
        }}
      ></Box>
    </Grid>
  );
};

export default Cards;
