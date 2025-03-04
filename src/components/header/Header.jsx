import styled from "styled-components";
const Header = () => {
  return (
    <>
      <ImgDiv>
        <ToDo>T O D O</ToDo>
        <Moon src="/moon.svg" />
      </ImgDiv>
      <InputDiv>
        <Input />
      </InputDiv>
    </>
  );
};

const ImgDiv = styled.div`
  width: 325px;
  height: 20px;
  margin-top: 20px;
  background-color: #8d6666;
  display: flex;
  justify-content: space-between;
`;
const ToDo = styled.h1`
  color: #ffffff;
  font-size: 20px;
`;
const Moon = styled.img`
  width: 20px;
`;
const InputDiv = styled.div`
  width: 327px;
  height: 48px;
  top: 108px;
  left: 24px;
  border-radius: 5px;
  background-color: #ffffff;
  margin-top: 30px;
`;
const Input = styled.input`
  width: 327px;
  height: 48px;
  top: 108px;
  left: 24px;
  border-radius: 5px;
  border: none;
  ::placeholder {
    color: red;
    font-size: 20px;
  }
  &:focus {
    border-color: #007bff;
    background-color: #f0f8ff;
  }
`;
export default Header;
