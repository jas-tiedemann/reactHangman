import React from "react";
import { Box, Typography } from "@mui/material";

const WrongLetters = ( { wrongLetters } ) => {
    return (
        <Box>
            <Typography>Mistakes: { wrongLetters }</Typography>
        </Box>
    )
}

export default WrongLetters;