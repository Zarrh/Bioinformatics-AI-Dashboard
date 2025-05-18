import { Box, Typography, useTheme, List, ListItem } from "@mui/material"
import { tokens } from "../theme"
import Header from "../components/Header"
import BrainImage from "../components/BrainImage"
import { brainMRI } from "../assets"

import { useEffect } from 'react'

const Healthcare = () => {

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
        <Header title="AI per la diagnosi di malattie" subtitle="Tommaso Bardini" />
      </Box>

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
              AI applicata alla diagnosi 
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
              fontSize={20}
              color={colors.grey[100]}
            >
              Utilizzare l'intelligenza artificiale (IA) per le diagnosi mediche significa sfruttare algoritmi avanzati, (soprattutto machine learning e deep learning) per analizzare dati clinici, supportare i medici nell'identificazione di patologie e condizioni cliniche. 
            </Typography>
          </Box>
        </Box>
      </Box>

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
              Capacità AI
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
            <Typography fontSize={20} color={colors.grey[100]} mb={1}>
              Le principali capacità dell'AI in ambito medico sono:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Analizzare grandi quantità di dati medici (come radiografie, TAC, esami del sangue, cartelle cliniche, sequenza genomica...) molto più velocemente di un essere umano.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Riconoscere schemi e anomalie che possono sfuggire all'occhio umano, come piccoli segni di tumori in immagini diagnostiche.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Suggerire diagnosi possibili e mirate sulla base dei sintomi e dei dati del paziente, confrontandoli con milioni di casi precedenti.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Prevedere il rischio di sviluppare certe malattie nel futuro, grazie all'analisi predittiva.
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

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
              Vantaggi IA nella diagnosi medica
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
            <Typography fontSize={20} color={colors.grey[100]} mb={1}>
              Chiaramente L'IA nell'ambito delle diagnosi ha portato numerosi benifici tra i quali:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Analizzare migliaia di immagini o dati in pochi secondi.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Rilevare dettagli microscopici su immagini e dati che magari al medico potrebbero sfuggire.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                L'IA possiede una banca dati enorme e potrebbe riscontrare delle malattie rare che il medico potrebbe non conoscere.
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

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
              Svantaggi IA nella diagnosi medica
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
            <Typography fontSize={20} color={colors.grey[100]} mb={1}>
              Contro:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Se i dati immessi per il learing sono imprecisi, sbagliati o parziali l'IA apprende in modo sbagliato andando ad effettuare poi diagnosi errate.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Mancanza di intuito umano.
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Se sono presenti distorsioni nei dati o negli algoritmi queste potrebbero portare l'intelligenza artificiale a dare risultati sbilanciati o errati, specialmente verso certi gruppi di persone (es. per etnia, genere, età o status socioeconomico).
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

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
              I tumori al cervello
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
            <Typography fontSize={20} color={colors.grey[100]} mb={1}>
              Un tumore cerebrale è una massa anomala di cellule, che si origina da una crescita anomala e incontrollata di cellule nel cervello. I tumori cerebrali si distinguono in 2 tipi:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Primari: veri tumori celebrali che si sono originati nel cervello (non frequentissimi).
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Metastatici: si originano in un'altra parte del corpo e arrivano al cervello tramite i vasi sanguigni che trasportano cellule tumorali.
              </ListItem>
            </List>
            <Typography fontSize={20} color={colors.grey[100]} mb={1}>
              I principali tumori celebrali sono:
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Gliomi
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Meningiomi
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Tumori pituari
              </ListItem>
            </List>
          </Box>
        </Box>
      </Box>

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
              MRI di un cervello
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
          <Box
            mx="auto"
            p={1.5}
            sx={{
              display: 'inline-block',
              borderRadius: '12px',
              backgroundColor: colors.primary[400],
            }}
          >
            <Box
              sx={{
                borderRadius: '10px',
                overflow: 'hidden',
              }}
            >
              <img src={brainMRI} alt="Brain MRI" style={{ display: 'block', width: '100%', height: 'auto' }} />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box id="demo">
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
              Demo
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
            <BrainImage />
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Healthcare