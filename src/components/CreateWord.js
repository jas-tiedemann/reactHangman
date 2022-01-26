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
            top: "50%",
            left: "50%",
            height: "80%",
            width: "80%",
            transform: "translate(-50%, -50%)",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <Typography variant="h3" sx={{
                color: "black",
                margin: "0 2rem"
                }}>
                Please type in a word to guess
            </Typography>
            <Container sx={{
                bgcolor: "transparent",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: "80px",
                width: "80%",
                height: 100,
                borderRadius: 2
            }}>
                <form onSubmit={handleWordSubmit}>
                    <TextField required variant="outlined" onChange={handleWordInput} value={wordInput.toLowerCase()}>
                    </TextField>
                    <Button type="submit" sx={{
                        color: "black"
                    }}>
                    Submit
                    </Button>
                </form>
            </Container>
      </Box>
    )
}

export default CreateWord;