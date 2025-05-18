import { Box, Typography, useTheme, List, ListItem, Grid } from "@mui/material"
import { tokens } from "../theme"
import Header from "../components/Header"
import { footage1, footage2, footage3, output1, output2, output3, suspect } from "../assets"

import { useEffect } from 'react'

const videoSources = [
  footage1,
  output1,
  footage2,
  output2,
  footage3,
  output3,
]

const Forensics = () => {

  const theme = useTheme()
  const colors = tokens(theme.palette.mode)

  useEffect(() => {
    const hash = window.location.hash
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [])

  return (
    <Box mt="80px" maxWidth={"70%"} mx="auto" textAlign={"justify"}>
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="CV per l'analisi forense: riconoscimento facciale" subtitle="Manal Tbibi" />
      </Box>

      {/* GRID & CHARTS */}

      <Box>
        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Introduzione
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              L'informatica forense è una branca delle scienze forensi legata alle prove digitali acquisite da computer e altri
              dispositivi. <br />
              Il suo scopo è quello di esaminare dispositivi digitali seguendo processi di analisi forense al fine di identificare,
              preservare, recuperare, analizzare e presentare fatti o opinioni riguardanti le informazioni raccolte.
              L'informatica forense applica metodologie e strumenti specializzati per garantire l'integrità e l'autenticità delle
              prove digitali, seguendo protocolli rigorosi per la catena di custodia e documentando ogni fase del processo
              investigativo.
            </Typography>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              La biometria forense
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              La biometria forense è la branca dell'informatica forense che applica tecnologie biometriche per
              l'identificazione e la verifica di individui nell'ambito di indagini legali e processi giudiziari.
              Utilizza caratteristiche biologiche uniche e misurabili (come impronte digitali, DNA, iride, volto, voce) per
              collegare individui a scene del crimine, identificare vittime o sospetti, e fornire prove scientifiche.
            </Typography>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Il riconoscimento facciale
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              Il riconoscimento facciale è una tecnica di identificazione automatica che utilizza algoritmi di intelligenza
              artificiale per analizzare le caratteristiche uniche del volto umano e confrontarle con immagini presenti in
              database biometrici, con l'obiettivo di identificare o verificare l'identità di un individuo in ambito giudiziario o
              investigativo. <br />
              La tecnologia di riconoscimento facciale opera secondo quattro fasi principali:
            </Typography>
            <List sx={{ listStyleType: 'number', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Rilevamento del volto (Face Detection): individuazione della presenza di uno o più volti all'interno di
                un'immagine o di un frame video.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Allineamento del volto (Face Alignment): normalizzazione della posizione, delle dimensioni e
                dell'orientamento del volto rilevato per consentire un'analisi più accurata, spesso attraverso
                l'individuazione di punti chiave (occhi, naso, bocca).
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Estrazione delle caratteristiche (Feature Extraction): generazione di un vettore di caratteristiche uniche
                del volto allineato, utilizzando algoritmi tradizionali o reti neurali convoluzionali (CNN).
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Corrispondenza (Matching/Verification): confronto del vettore di caratteristiche con un database di volti
                noti, in due modalità:
                <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    Identificazione (One-to-Many): il sistema cerca il corrispondente tra tutti i volti presenti nel
                    database.
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    Verifica (One-to-One): il sistema confronta il volto con un'immagine specifica per confermare
                    l'identità dichiarata.
                  </ListItem>
                </List>
              </ListItem>
            </List>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Database
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              Esistono diversi database utilizzati per il riconoscimento facciale, divisibili in due categorie principali: database
              pubblici e database forensi. I database pubblici vengono utilizzati per l'addestramento delle reti neurali al
              riconoscimento facciale e in ambito universitario. I database forensi, invece, sono privati e vengono utilizzati
              dalle forze d'ordine per il riconoscimento di criminali o di persone ricercate.
            </Typography>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Problematiche
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              Il riconoscimento facciale presenta diverse problematiche. Una delle principali riguarda l'affidabilità: variazioni
              di luce, angolazione del volto, qualità dell'immagine o elementi di disturbo come occhiali o mascherine possono compromettere
              l'accuratezza del sistema. Inoltre, la mancanza di una rappresentanza eterogenea nei dati di addestramento può portare a errori o bias nei
              confronti di determinate categorie etniche.
              Dal punto di vista etico e legale, sorgono importanti questioni legate alla privacy e all'uso non consensuale dei
              dati biometrici. Attualmente, non esiste una normativa internazionale univoca che regoli l'utilizzo di questa
              tecnologia. <br />
              Il riconoscimento facciale presenta varie problematiche. Una delle principali è legata alla precisione e
              affidabilità: variazioni di luce, angolazione del volto, qualità dell'immagine o presenza di occhiali e mascherine
              possono compromettere i risultati. Inoltre, ci possono essere dei problemi a livello del riconoscimento di alcune
              categorie di persone, soprattutto se l'algoritmo non é stato allenato utilizzando dati eterogenei. A livello etico e
              legale sorgono varie questioni legate alla privacy e all'uso non consensuale dei dati, nello specifico non esiste
              una normativa internazionale che regolamenta l'utilizzo di questa tecnologia.
            </Typography>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              La Computer Vision
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              La computer vision è una branca dell'intelligenza artificiale (AI) che studia e programma algoritmi e tecniche
              che consentono ai computer di replicare i processi e le funzioni dell'apparato visivo umano e di rilevare e
              interpretare informazioni importanti attraverso un'immagine digitale, un video o altri input visivi.
              Per analizzare immagini e video viene utilizzata la libreria di Python OpenCV, che permette di elaborare
              immagini e video, andando a identificare le regioni in cui sono presenti delle persone.
              Per riconoscere il volto di una persona si usa la libreria DeepFace, basata su reti neurali convoluzionali.
              DeepFace trasforma ogni immagine di volto in un vettore numerico chiamato embedding, che codifica le
              caratteristiche uniche di quel volto in uno spazio multidimensionale. In questo spazio, volti simili sono
              rappresentati da punti vicini, mentre volti diversi risultano distanti. Questa rappresentazione consente un
              confronto preciso e rapido tra volti.
            </Typography>
          </Box>
        </Box>

        <Box
          mt="25px"
          mb="25px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Box id="demo">
            <Typography
              variant="h3"
              fontWeight="600"
              color={colors.grey[100]}
            >
              Demo
            </Typography>
          </Box>
        </Box>
        <Box mb="4rem">
          <Typography
            variant="h5"
            fontWeight="600"
            color={colors.grey[100]}
            mb="2rem"
          >
            Reference image:
          </Typography>
          <img
            src={suspect}
            width="50%"
            height="auto"
            style={{ display: "block", borderRadius: "8px", marginLeft: "auto", marginRight: "auto" }}
          />
        </Box>
        <Box mb="4rem">
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Footage:</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 6 }}>
              <Typography variant="h5" fontWeight="600" color={colors.grey[100]}>Detection:</Typography>
            </Grid>
            {videoSources.map((src, idx) => (
              <Grid size={{ xs: 12, sm: 6 }} key={idx}>
                <Box
                  sx={{
                    overflow: "hidden",
                    borderRadius: 2,
                    boxShadow: 3,
                  }}
                >
                  <video
                    src={src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    width="100%"
                    height="auto"
                    style={{ display: "block", borderRadius: "8px" }}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
  )
}

export default Forensics