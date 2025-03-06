import React from "react";
import styled from "styled-components";

const Footer = ({ isDarkMode, setFilter, currentFilter }) => {
  return (
    <>
      <LastDiv isDarkMode={isDarkMode}>
        <All
          onClick={() => setFilter("all")}
          isActive={currentFilter === "all"}
        >
          All
        </All>
        <Active
          onClick={() => setFilter("active")}
          isActive={currentFilter === "active"}
        >
          Active
        </Active>
        <Completed
          onClick={() => setFilter("completed")}
          isActive={currentFilter === "completed"}
        >
          Completed
        </Completed>
      </LastDiv>
      <Paragraph isDarkMode={isDarkMode}>Drag and drop to reorder list</Paragraph>
    </>
  );
};

const LastDiv = styled.div`
  width: 327px;
  height: 40px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000a6" : "#ffffff")};
  display: flex;
  justify-content: space-evenly;
  border-radius: 5px;
  margin-top: 20px;
  align-items: center;
  @media(min-width:1440px){
  width:540px;
  height:50px;
  }
`;

const All = styled.p`
  color: ${({ isDarkMode, isActive }) => 
    isActive ? "blue" : (isDarkMode ? "#aaa" : "#ccccccd9")};
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Active = styled.p`
  color: ${({ isDarkMode, isActive }) => 
    isActive ? "blue" : (isDarkMode ? "#aaa" : "#ccccccd9")};
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Completed = styled.p`
  color: ${({ isDarkMode, isActive }) => 
    isActive ? "blue" : (isDarkMode ? "#aaa" : "#ccccccd9")};
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

const Paragraph = styled.p`
  font-size: 15px;
  color: ${({ isDarkMode }) => (isDarkMode ? "gray" : "#7365658f")};
  margin-top: 13px;
  margin-left: 57px;
  @media(min-width:1440px){
  font-size:18px;
  margin-top: 40px;
  margin-left: 150px;
  }
`;

export default Footer;
