import styled from "@emotion/styled";
import TextareaAutosize from "@mui/material/TextareaAutosize";

// Homepage

export const Container = styled.div`
  display: grid;
  margin-left: auto;
  margin-right: auto;
  width: 40vw;
  padding: 30px;
  border: 1px solid gray;
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
    rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
`;

export const InputArea = styled(TextareaAutosize)`
  border: 1px solid black;
  border-radius: 6px;
  width: auto;
  min-height: 400px;
  max-height: 400px;
  font-family: "Open Sans", sans-serif;
  padding-top: 8px;
  margin: 10px 0px;
  text-justify: center;
  text-overflow: wrap;
`;

// Modal

export const NewModalContainer = styled.div`
  min-height: 300px;
`;

export const ModalTitleArea = styled.div`
  grid-column: 1/5;
  font-size: 20px;
  grid-row: 1/2;
  background-color: #21130d;
  height: 58px;
  display: flex;
  padding: 0px 25px;
  justify-content: space-between;
`;

export const Title = styled.div`
  align-self: center;
  color: white;
`;

export const ModalContent = styled.div`
  padding: 20px;
  height: 60vh;
  overflow-y: scroll;
`;

export const CloseButton = styled.div`
  color: white;
  padding-top: 14px;
`;

export const LinkContainer = styled.div`
  margin: 20px 0;
  padding: 10px 20px;
  display: grid;
  align-items: center;
  justify-content: space-between;
  grid-template-columns: auto auto;
  border: 0.5px solid #21130d;
  border-radius: 5px;
  height: 40px;
`;
