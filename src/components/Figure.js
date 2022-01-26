import React from "react";
import { Box, Container } from "@mui/material";

import IMG0 from "../assets/img/hangman-img-0.png";
import IMG1 from "../assets/img/hangman-img-1.png";
import IMG2 from "../assets/img/hangman-img-2.png";
import IMG3 from "../assets/img/hangman-img-3.png";
import IMG4 from "../assets/img/hangman-img-4.png";
import IMG5 from "../assets/img/hangman-img-5.png";
import IMG6 from "../assets/img/hangman-img-6.png";
import IMG7 from "../assets/img/hangman-img-7.png";
import IMG8 from "../assets/img/hangman-img-8.png";
import IMG9 from "../assets/img/hangman-img-9.png";
import IMG10 from "../assets/img/hangman-img-10.png";
import IMG11 from "../assets/img/hangman-img-11.png";
import IMG12 from "../assets/img/hangman-img-12.png";

const Figure = ( { wrongLetters } ) => {
    
    const chooseImage = (wrongLetters) => {
        const imageList = [IMG0, IMG1, IMG2, IMG3, IMG4, IMG5, IMG6, IMG7, IMG8, IMG9, IMG10, IMG11, IMG12];
        
        if (wrongLetters.length > 0) {
            return imageList[wrongLetters.length];
        } else {
            return imageList[0];
        }   
    }

    return (
        <Container>
            <Box sx={{ 
                borderRadius: 2,
                boxShadow: 7,
                width: "70%",
                height: "70%",
                margin: 3,
                padding: 2
                }}>
                <img src={chooseImage(wrongLetters)} alt="figurine" max-width="100%" height="auto" width="100%"></img>
            </Box>
        </Container>
    )
}

export default Figure;