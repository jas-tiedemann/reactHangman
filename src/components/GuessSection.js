import React from "react";
import { Container, TextField, Button } from "@mui/material";

const GuessSection = ( { letterInput, handleLetterInput, handleLetterSubmit } ) => {
  return (
    <Container>
      <form onSubmit={handleLetterSubmit}>
        <TextField
          required
          type="text"
          onChange={handleLetterInput}
          inputProps={{maxLength: 1}}
          value={letterInput}
          sx={{
            border: "1px solid white",
            borderRadius: 1.3,
            "& .MuiOutlinedInput-root": {
              "&.Mui-focused fieldset": {
                borderColor: "white"
              }
            }
          }}>
        </TextField>
        <Button type="submit" sx={{
          color: "white",
          padding: "0.5rem",
          margin: "0.5rem",
          border: "1px solid white"
        }}>
          Guess
        </Button>
      </form>
  </Container>
)
}

export default GuessSection;