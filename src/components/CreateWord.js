import React from "react";
import { Box, TextField, Button, Typography, Container } from "@mui/material";

const CreateWord = ( { wordInput, handleWordInput, handleWordSubmit } ) => {

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            bgcolor: "#383838",
            boxShadow: 3,
            borderRadius: 2,
            position: "absolute",
            top: {xs: "25%", sm: "50%"},
            left: "50%",
            height: {xs: "40%", md: "80%"},
            width: "80%",
            margin: {xs: "auto", sm: 0},
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            justifyContent: {xs: "top", md: "center"}
        }}>
            <Typography variant="h3" sx={{
                color: "white",
                margin: "1rem 2rem",
                fontSize: {xs: "2rem", md: "3rem"}
                }}>
                Please type in a word to guess
            </Typography>
            <Container sx={{
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: {xs: "1rem", md: "2rem"},
                width: "80%",
                height: 100,
                borderRadius: 2
            }}>
                <form onSubmit={handleWordSubmit}>
                    <TextField required variant="outlined" onChange={handleWordInput} value={wordInput.toLowerCase()} sx={{
                        input: {color: "white"},
                        border: "1px solid white",
                        borderRadius: 1,
                        "& .MuiOutlinedInput-root": {
                            "&.Mui-focused fieldset": {
                              borderColor: "white"
                            }
                          }
                    }}>
                    </TextField>
                    <Button type="submit" sx={{
                        color: "#f3f3f3",
                        padding: "0.5rem",
                        margin: "0.5rem",
                        border: "1px solid #f3f3f3"
                    }}>
                        Submit
                    </Button>
                </form>
            </Container>
      </Box>
    )
}

export default CreateWord;