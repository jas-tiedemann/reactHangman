import React from "react";
import { Container, Box, Modal, Button, Typography } from "@mui/material";

const LossModal = ( { openLossModal, reloadPage } ) => {

    return (
        <Modal open={openLossModal}>
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"

            }}>
                <Container sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 400,
                    bgcolor: "#383838",
                    border: "2px solid #000",
                    borderColor: "white",
                    borderRadius: "5px",
                    boxShadow: 24,
                    padding: 4,
                    margin: "auto",
                    flexDirection: "column"
                }}>
                    <Typography sx={{
                        color: "white"
                    }}>
                        You Lost
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

export default LossModal;