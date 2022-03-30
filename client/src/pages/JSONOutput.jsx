import React, { useEffect, useState } from "react";
import JSONModal from "../components/Modal";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

export default function JSONOutput() {
  const [jsonOutput, setJsonOutput] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      const response = await axios.get(`json-output/${id}`);
      setJsonOutput(response?.data?.result || {});
    })();
  }, []);
  return (
    <JSONModal
      isOpen={true}
      onClose={() => {
        navigate("/");
      }}
      jsonOutput={jsonOutput}
    />
  );
}
