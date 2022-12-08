import React from "react";
import { AppBar } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";


const Header = () => {
    return (
        <Box sx={{ 
            flexGrow: 1
            }}>
            <AppBar position="sticky" sx={{
                alignItems: "center",
                backgroundColor: "#383838",
                padding: {md: "1rem"}
            }}>
                <Toolbar>
                    <Typography variant="h2" sx={{
                        color: "#f3f3f3"
                    }}>
                        Hangman
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header;