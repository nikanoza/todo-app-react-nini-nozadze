import React, { useState } from "react";
import styled from "styled-components";

const Header = ({ isDarkMode, toggleTheme, addTodo }) => {
  const [inputValue, setInputValue] = useState("");
  const [isNewTaskCompleted, setIsNewTaskCompleted] = useState(false); 

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && inputValue.trim() !== "") {
      addTodo(inputValue, isNewTaskCompleted);  
      setInputValue("");  
      setIsNewTaskCompleted(false);  
    }
  };

  const toggleNewTaskCompletion = () => {
    setIsNewTaskCompleted(!isNewTaskCompleted);
  };

  return (
    <>
      <ImgDiv>
        <ToDo>T O D O</ToDo>
        <ThemeIcon
          src={isDarkMode ? "/sun.svg" : "/moon.svg"}
          alt="Toggle Theme"
          onClick={toggleTheme}
        />
      </ImgDiv>
      <InputDiv isDarkMode={isDarkMode}>
        <Input
          isDarkMode={isDarkMode}
          placeholder="Create a new todo..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyPress}
          style={{
            backgroundImage: isNewTaskCompleted ? "url('/ticked.svg')" : "url('/notTicked.svg')",
          }}
          onClick={toggleNewTaskCompletion} 
        />
      </InputDiv>
    </>
  );
};

const ImgDiv = styled.div`
  width: 325px;
  height: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
  position: relative;
  top: 5%;
  @media(min-width:1440px){
    width:540px;
    position: relative;
  }
`;

const ToDo = styled.h1`
  color: white;
  font-size: 34px;
  @media(min-width:1440px){
    font-size: 40px;
  }
`;

const ThemeIcon = styled.img`
  width: 25px;
  height: 30px;
  cursor: pointer;
`;

const InputDiv = styled.div`
  width: 327px;
  height: 48px;
  border-radius: 5px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000a6" : "#ffffff")};
  margin-top: 67px;
  margin-bottom: 20px;
  @media(min-width:1440px){
    width: 540px;
    height: 64px;
  }
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 56px;
  border: none;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-position: 27px center;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000a6" : "#ffffff")};
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")};

  &::placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? "#aaa" : "gray")};
  }

  &:focus {
    outline: none;
  }
`;

export default Header;
