import React from "react";
import { Container } from "@mui/material";

const Word = ( { splitWord, correctLetters } ) => {
    
    return (
        <Container>
            {splitWord.map( (letter, butterfly) => {
                return (
                    <span className="letter" key={butterfly}>
                        {correctLetters.includes(letter) ? letter + " " : "_ "}
                    </span>
                )
            } )}
        </Container>
    )
}

export default Word;