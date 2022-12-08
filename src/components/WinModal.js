import React from "react";
import { Container, Box, Modal, Button, Typography } from "@mui/material";

const WinModal = ( { openWinModal, reloadPage } ) => {

    return (
        <Modal open={openWinModal}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                bgcolor: "transparent"

            }}>
                <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 400,
                    bgcolor: "#383838",
                    border: "2px solid #000",
                    borderColor: "black",
                    borderRadius: "5px",
                    boxShadow: 24,
                    padding: 4,
                    margin: "auto",
                    flexDirection: "column"
                }}>
                    <Typography>
                        You Won
                    </Typography>
                    <Button onClick={reloadPage} sx={{
                        color: "white",
                        fontSize: "2rem"
                    }}>Play Again</Button>
                </Container>
            </Box>
        </Modal>
    )
}

export default WinModal;