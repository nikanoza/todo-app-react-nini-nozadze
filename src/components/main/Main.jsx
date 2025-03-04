import styled from "styled-components";

const Main = () => {
  const inputs = Array(6).fill("");

  return (
    <DivBox>
      {inputs.map((_, index) => (
        <StyledInput
          key={index}
          type="text"
          placeholder={`Input ${index + 1}`}
        />
      ))}
    </DivBox>
  );
};

const DivBox = styled.div`
  width: 327px;
  height: 400px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  border-bottom-style: inset;
  &:focus {
    border-color: #007bff;
    background-color: #f0f8ff;
  }
`;

export default Main;
