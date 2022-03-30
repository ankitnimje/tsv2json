import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import CloseIcon from "@mui/icons-material/Close";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { CopyBlock, dracula } from "react-code-blocks";

import { Link } from "react-router-dom";

import {
  NewModalContainer,
  ModalTitleArea,
  Title,
  ModalContent,
  CloseButton,
  LinkContainer,
} from "./style";

function JSONModal({ isOpen, onClose, title, jsonOutput }) {
  const { jsonData = {}, error = {}, key } = jsonOutput || {};

  const linkText = window.location.origin + "/" + key;

  const [isCopied, setIsCopied] = useState(false);

  const copyLink = async () => {
    await navigator.clipboard.writeText(linkText);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 3000);
  };

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      maxWidth="lg"
      fullWidth={true}
    >
      <DialogContent style={{ padding: "0px" }}>
        <NewModalContainer>
          <ModalTitleArea>
            <Title>{title}</Title>
            <CloseButton onClick={onClose}>
              <CloseIcon />
            </CloseButton>
          </ModalTitleArea>
          <ModalContent>
            <Stack spacing={2}>
              <Typography variant="overline">JSON Data: </Typography>
              <CopyBlock
                language="json"
                text={JSON.stringify(jsonData, null, 2)}
                codeBlock
                theme={dracula}
                showLineNumbers={true}
                wrapLines={true}
              />
              <Typography variant="overline">Errors: </Typography>
              <CopyBlock
                language="json"
                text={JSON.stringify(error, null, 2)}
                theme={dracula}
                codeBlock
              />
              <LinkContainer>
                <Link variant="link" to={`/${key}`}>
                  {linkText}
                </Link>
                {!isCopied ? (
                  <Button variant="outlined" onClick={copyLink}>
                    Copy
                  </Button>
                ) : (
                  <Typography style={{ color: "#1976d2" }}>
                    Link copied!
                  </Typography>
                )}
              </LinkContainer>
            </Stack>
          </ModalContent>
        </NewModalContainer>
      </DialogContent>
      <DialogActions
        style={{
          marginBottom: "25px",
          marginRight: "20px",
          display: "grid",
          justifyContent: "end",
          justifyItems: "center",
        }}
      >
        <Button variant="contained" onClick={onClose}>
          Done
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default JSONModal;
