import { Box, Typography, useTheme, List, ListItem } from "@mui/material"
import { tokens } from "../theme"
import Header from "../components/Header"
import Grid from "../components/Grid"
import 'katex/dist/katex.min.css'
import { InlineMath, BlockMath } from 'react-katex'
import { mnist, model, network, neuron, convolution, gradient } from "../assets"

import { useEffect } from 'react'

const NeuralNetwork = () => {

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
        <Header title="Introduzione alle reti neurali: riconoscimento di cifre" subtitle="Luca Fagaraz" />
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
              L'obiettivo di questa sezione è fornire un'introduzione matematica alle reti neurali e, successivamente, 
              realizzare un software in Python in grado di riconoscere le cifre scritte a mano. Per questo <b>non verranno 
              utilizzati framework o librerie</b> oltre che quelle per ottimizzare le operazioni di algebra lineare (Numpy).
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <img src={network} alt="Network" style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />
        </Box>
      </Box>

      <Box>
        <Box
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
              Il neurone
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
              Il neurone è la componente fondamentale di una rete neurale. Questo svolge la funzione di calcolarsi un proprio stato, ossia un numero in <InlineMath math="\mathbb{R}" />, in 
              funzione degli input e in base a questo attivare più o meno i successivi neuroni, fungendo esso stesso da input per questi ultimi. Un modo in cui possiamo definire lo stato di un neurone è il seguente:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'z_j = \\sum_{i}a_i\\cdot w_i + b_j'} />
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
              Dove <InlineMath math="a_i" /> e <InlineMath math="w_i" /> sono rispettivamente l'iesimo input del neurone e peso associato al collegamento, mentre <InlineMath math="b_j" /> corrisponde 
              al bias del neurone. Lo stato, dunque, non è altro che una combinazione lineare degli input sommata ad un numero reale, il bias, che come vedremo in seguito, 
              determinerà la "soglia" di attivazione del neurone.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <img src={neuron} alt="Neuron" style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />
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
              Funzioni di attivazione
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
              Per come abbiamo appena definito lo stato di un neurone, esso altro non è che una combinazione lineare degli input. Di conseguenza, 
              usando tali stati l'intera rete neurale altro non sarebbe che un'applicazione lineare, mentre il processo di addestramento sarebbe 
              una semplice regressione lineare. Ciò non porterebbe ad un'alta efficienza nello svolgere il compito per cui stiamo realizzando il modello. 
              Dunque, per risolvere questo problema, possiamo applicare allo stato <InlineMath math="z" /> del neurone una "funzione di attivazione" non lineare. 
              Le più utilizzate sono le seguenti:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box display="flex" justifyContent="space-between" alignItems="center" gap="50px">
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\sigma(z) = \\dfrac{1}{1+e^{-z}}'} />
            </Typography>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\text{ReLU}(z) = \\begin{cases}1\\text{ if }z > 0 \\\\[1em] 0\\text{ if }z \\leqslant 0\\end{cases}'} />
            </Typography>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\text{tanh}(z) = \\dfrac{e^z - e^{-z}}{e^z + e^{-z}}'} />
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
              Una volta applicata la funzione scelta, possiamo calcolare l'input del successivo neurone come:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'a^{(L)} = f(z^{(L-1)}) = f(w^{(L)}\\cdot a^{(L-1)} + b^{(L)})'} />
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
              Le convoluzioni
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
              È opportuno soffermarsi un attimo sulle convoluzioni. La convoluzione di due funzioni <InlineMath math="f: \mathbb{R} \to \mathbb{R}" /> e <InlineMath math="g: \mathbb{R} \to \mathbb{R}" /> è 
              definita come:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mx="auto"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'(f \\ast g)(t) = \\int_{-\\infty}^{+\\infty}f(\\tau)\\cdot g(t - \\tau)d\\tau'} />
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <img src={convolution} alt="Neuron" style={{ display: 'block', width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto', marginTop: '-120px' }} />
        </Box>
        <Box
          mt="-320px"
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
              Al di là del formalismo matematico, su cui non ci soffermeremo, è importante notare come le convoluzioni svolgano un ruolo importante se usate nei layer nascosti (ossia quelli 
              che non sono né di input né di output) di una rete neurale per l'elaborazione di immagini. Una convoluzione, infatti, altro non è che una "misura" della correlazione tra <InlineMath math="f" /> e <InlineMath math="g" />. Nel contesto 
              dell'analisi di immagini, ciò ci permette di determinare quanto dei pixel adiacenti siano correlati. In questa sezione, tuttavia, le convoluzioni non saranno utilizzate.
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
              La funzione costo
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
              Inizialmente non possiamo conoscere tutti i valori di pesi e bias adatti alla nostra rete neurale. Per determinarli, possiamo procedere con la 
              fase di addestramento. Innanzitutto è necessario capire quanto i valori iniziali di pesi e bias (scelti casualmente) sbaglino rispetto a un insieme di input 
              di cui conosciamo l'output atteso. A tal scopo, possiamo definire la funzione "costo" di un tensore di input come:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'C_0 = \\left|\\left|a^{(n)} - y\\right|\\right|^2'} />
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
              Dove <InlineMath math="y" /> è l'output atteso. Possiamo inoltre definire il costo totale 
              sull'insieme di input per l'addestramento come la media dei costi singoli:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'C = \\\dfrac{1}{N}\\sum_i\\left|\\left|a^{(n)}_i - y_i\\right|\\right|^2'} />
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
              Il nostro scopo sarà quello di andare a minimizzare tale funzione.
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
              Minimizzare una funzione: discesa del gradiente
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
              La funzione costo è una funzione di un numero di variabili pari alla somma del numero di pesi e bias. È quindi una funzione 
              di decine di migliaia di variabili per i modelli più semplici, mentre può raggiungere le centinaia di milioni in quelli più complessi. 
              Di conseguenza, è infattibile trovare un'espressione analitica di un minimo assoluto. Possiamo tuttavia determinare approssimativamente un minimo relativo tramite 
              metodi iterattivi. Tra questi, il più diffuso è quello della "discesa del gradiente".
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\Delta x = -\\eta \\dfrac{\\partial f}{\\partial x}'} />
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
              Il fattore <InlineMath math="\eta" /> è un numero reale detto "learning rate". Data la grandezza dell'insieme dei dati per l'addestramento, 
              è conveniente calcolare il costo di un campione limitato di input presi casualmente (a cui spesso ci si riferisce con il termine di "batch"). 
              In tal modo, la variazione del costo presenterà delle fluttuazionidella funzione casuali, ma risulterà complessivamente rivolta verso un minimo relativo.
              Si parla quindi di SGD (Stochastic Gradient Descent).
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
          mt="-120px"
        >
          <img src={gradient} alt="MNIST" style={{ display: 'block', width: '100%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />
        </Box>
      </Box>

      <Box>
        <Box
          mt="-120px"
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
              Backpropagation
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
              Per applicare il metodo della discesa del gradiente, è necessario infine determinare le derivate della funzione costo rispetto 
              all'iesimo peso e bias. Per il teorema della derivata di una funzione composta, abbiamo che:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\dfrac{\\partial C_0}{\\partial w^{(L)}} = \\dfrac{\\partial C_0}{\\partial a^{(L)}}\\dfrac{\\partial a^{(L)}}{\\partial z^{(L)}}\\dfrac{\\partial z^{(L)}}{\\partial w^{(L)}}'} />
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
              Non ci resta quindi che calcolare le varie derivate:
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\dfrac{\\partial C_0}{\\partial a^{(L)}} = 2\\left|\\left|a^{(L)}-y\\right|\\right|'} />
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\dfrac{\\partial a^{(L)}}{\\partial z^{(L)}} = \\dfrac{df}{dz^{(L)}}'} />
            </Typography>
          </Box>
        </Box>
        <Box
          mt="25px"
          mb="25px"
          mx={"auto"}
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              <BlockMath math={'\\dfrac{\\partial z^{(L)}}{\\partial w^{(L)}} = a^{(L-1)}'} />
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
              In modo analogo si può procedere per calcolare le derivate rispetto ai bias. L'algoritmo appena sviluppato per il calcolo delle derivate prende in nome di "backpropagation".
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
              Il dataset: MNIST
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
              Il dataset preso per l'addestramento della rete neurale è il MNIST (modified National Institute of Standards and Technology database). 
              Questo consiste in un totale di 70.000 immagini 28×28 di cifre scritte a mano da studenti e impiegati americani. Di queste, 60.000 sono destinate 
              ad essere usate per l'allenamento, mentre le restanti per la verifica del modello.
            </Typography>
          </Box>
        </Box>  
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <img src={mnist} alt="MNIST" style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />
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
              Il modello sviluppato
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
              Il modello sviluppato consiste in una rete neurale con: 
            </Typography>
            <List sx={{ listStyleType: 'disc', pl: 2, fontSize: 20, color: colors.grey[100] }}>
              <ListItem sx={{ display: 'list-item' }}>
                Un layer di input di 784 neuroni (uno per ogni pixel)
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Tre layer nascosti, di 40, 32 e 16 neuroni ciascuno
              </ListItem>
              <ListItem sx={{ display: 'list-item' }}>
                Un layer di output di 10 neuroni (uno per ogni cifra)
              </ListItem>
            </List>
            <Typography
              fontSize={20}
              color={colors.grey[100]}
            >
              Tutti i layer sono lineari con la funzione <InlineMath math='\sigma' /> come attivazione. La precisione a cui siamo arrivati è del 92.27%.
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            overflow: 'hidden',
          }}
        >
          <img src={model} alt="Model" style={{ display: 'block', width: '50%', height: 'auto', marginLeft: 'auto', marginRight: 'auto' }} />
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
              Demo
            </Typography>
          </Box>
        </Box>
        <Grid backgroundColor={colors.primary[500]}/>
      </Box>
    </Box>
  )
}

export default NeuralNetwork