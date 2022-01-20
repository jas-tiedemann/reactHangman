import React from "react";
import { Container } from "@mui/material";

const Word = ( { splitWord, correctLetters } ) => {
    
    return (
        <Container>
            {splitWord.map( (letter, i) => {
                return (
                    <span className="letter" key={i}>
                        {correctLetters.includes(letter) ? letter + " " : "_ "}
                    </span>
                )
            } )}
        </Container>
    )
}

export default Word;