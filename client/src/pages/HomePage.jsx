import React, { useState } from "react";
import JSONModal from "../components/Modal";
import axios from "axios";

import Button from "@mui/material/Button";
import { FormControl, Typography } from "@mui/material";
import { Container, InputArea } from "../components/style";

export default function HomePage() {
  const [TSVData, setTSVData] = useState("");
  const [jsonOutput, setJsonOutput] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleSubmit = async () => {
    const response = await axios.post("/tsv-to-json", { TSVData: TSVData });
    setJsonOutput(response?.data?.result);
    openModal();
    setTSVData("");
  };

  return (
    <>
      <Container>
        <JSONModal
          title={"JSON Export Data"}
          isOpen={isModalOpen}
          onClose={closeModal}
          okText={"Done"}
          jsonOutput={jsonOutput}
        />
        <FormControl>
          <Typography>Paste TSV Data here</Typography>
          <InputArea
            value={TSVData}
            onChange={(e) => setTSVData(e.target.value)}
          />
          <Button variant="contained" onClick={handleSubmit}>
            Convert TSV to JSON
          </Button>
        </FormControl>
      </Container>
    </>
  );
}
