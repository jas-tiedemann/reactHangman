import React from "react";
import { Container, Modal, Button, Typography } from "@mui/material";

const WinModal = ( { openWinModal, reloadPage } ) => {

    return (
        <Modal open={openWinModal}>
            <Container sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                border: "2px solid #000",
                boxShadow: 24,
                padding: 4
                }}>
                <Typography>
                    You Won
                </Typography>
                <Button onClick={reloadPage}>Play Again</Button>
            </Container>
        </Modal>
    )
}

export default WinModal;