import './App.css';
import Header from "./components/Header";
import Figure from "./components/Figure";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import CreateWord from "./components/CreateWord";
import LossModal from "./components/LossModal";
import WinModal from "./components/WinModal";
import GuessSection from "./components/GuessSection";
import { Grid, Container, Box } from "@mui/material";
import { useEffect, useState } from "react";

const App = () => {

  const [wordInput, setWordInput] = useState("");
  const [wordSubmit, setWordSubmit] = useState(false);
  const [letterInput, setLetterInput] = useState("");
  const [letterList, setLetterList] = useState("");
  const [correctLetters, setCorrectLetters] = useState([]);
  const [wrongLetters, setWrongLetters] = useState([]);
  const [openWinModal, setOpenWinModal] = useState(false);
  const [openLossModal, setOpenLossModal] = useState(false);

  
  const handleWordInput = (e) => {
    setWordInput(e.target.value.toLowerCase());
  }
  
  const handleWordSubmit = (e) => {
    e.preventDefault();
    setWordSubmit(true);
  }



  const handleLetterInput = (e) => {
    setLetterInput(e.target.value.toLowerCase());
  }

  const handleLetterSubmit = (e) => {
    e.preventDefault();
    setLetterList(letterInput);
    setLetterInput("");
  }



  const handleLoss = () => {
    setOpenLossModal(true);
  }

  const handleWin = () => {
    setOpenWinModal(true);
  }



  const reloadPage = () => {
    document.location.reload(true);
  }


  const findIndex = (arr, value) => {
    const corrIndices = [];
    let idx = arr.indexOf(value);
    while (idx !== -1) {
      corrIndices.push(idx);
      idx = arr.indexOf(value, idx + 1);
    }
    return(corrIndices);
  }


  useEffect(() => {
    const checkLetter = (word, letter) => {
      const indeces = findIndex(wordInput.split(""), letterList);

      if (letter) {
        letter = letter.toLowerCase();
        if (correctLetters.indexOf(letter) === -1 && wrongLetters.indexOf(letter) === -1) {
          if (word.indexOf(letter) !== -1) {
            for (let i = 0; i < indeces.length; i++) {
              setCorrectLetters(correctLetters => [...correctLetters, word[indeces[i]]]);
            }
          } else {
            setWrongLetters(wrongLetters => [...wrongLetters, letter]);
          }
        } else {
          alert("Already tried key");
        }
      }
    }
    checkLetter(wordInput.split(""), letterList);
  }, [letterList]);


  useEffect(() => {
    if (correctLetters.length !== 0 && correctLetters.length === wordInput.split("").length) {
      handleWin();
    }

    if (wrongLetters.length !== 0 && wrongLetters.length === 13) {
      handleLoss();
    }
  }, [wrongLetters, correctLetters]);
  

  if (wordSubmit === false) {
    return (
      <CreateWord wordInput={wordInput} handleWordInput={handleWordInput} handleWordSubmit={handleWordSubmit} />
    );
  } else {
    return (
      <Box className="App">
        <Header />

        <Grid container spacing={2} align="center">
          <Grid item xs={12}>
            <Figure wrongLetters={wrongLetters} />
          </Grid>

          <Grid item xs={4} align="center">
            <GuessSection letterInput={letterInput} handleLetterInput={handleLetterInput} handleLetterSubmit={handleLetterSubmit} />
          </Grid>

          <Grid item xs={4} align="center">
            <WrongLetters wrongLetters={wrongLetters}/>
          </Grid>

          <Grid item xs={4} align="center">
            <Word splitWord={wordInput.split("")} correctLetters={correctLetters} />
          </Grid>
        </Grid>
        <LossModal openLossModal={openLossModal} reloadPage={reloadPage} />
        <WinModal openWinModal={openWinModal} reloadPage={reloadPage} />
      </Box>
    );
  }
}

export default App;
