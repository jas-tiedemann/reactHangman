import React from "react";
import { Container, TextField } from "@mui/material";

const GuessSection = ( { letterInput, handleLetterInput, handleLetterSubmit } ) => {
  

  return (
    <Container>
      <form onSubmit={handleLetterSubmit}>
          <TextField
            onChange={handleLetterInput}
            inputProps={{maxLength: 1}}
            value={letterInput.toLowerCase()}>
          </TextField>
      </form>
  </Container>
)
}

export default GuessSection;