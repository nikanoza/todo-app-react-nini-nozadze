import React from "react";
import styled from "styled-components";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor
} from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  useSortable,
  arrayMove
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const Main = ({ isDarkMode, todos, setTodos }) => {
  const sensors = useSensors(useSensor(PointerSensor));

  const handleDelete = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const handleComplete = (index) => {
    setTodos(
      todos.map((todo, i) =>
        i === index ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };

  const onDragEnd = (event) => {
    const { active, over } = event;
    if (!over || active.id === over.id) return;

    const oldIndex = todos.findIndex((todo) => todo.text === active.id);
    const newIndex = todos.findIndex((todo) => todo.text === over.id);

    setTodos(arrayMove(todos, oldIndex, newIndex));
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={onDragEnd}>
      <SortableContext items={todos.map((todo) => todo.text)} strategy={verticalListSortingStrategy}>
        <DivBox isDarkMode={isDarkMode}>
          {todos.map((task) => (
            <DraggableTodoItem
              key={task.text}
              id={task.text}
              task={task}
              isDarkMode={isDarkMode}
              handleComplete={handleComplete}
              handleDelete={handleDelete}
            />
          ))}
          <SmallDiv isDarkMode={isDarkMode}>
            <HowMany>{todos.length} items left</HowMany>
            <Span onClick={clearCompleted}>Clear Completed</Span>
          </SmallDiv>
        </DivBox>
      </SortableContext>
    </DndContext>
  );
};

const DraggableTodoItem = ({ id, task, isDarkMode, handleComplete, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    textDecoration: task.completed ? "line-through" : "none"
  };

  return (
    <InputContainer ref={setNodeRef} {...attributes} {...listeners} style={style}>
      <CheckIcon
        src={task.completed ? "/ticked.svg" : "/notTicked.svg"}
        alt="Check"
        onClick={() => handleComplete(id)}
      />
      <StyledInput type="text" value={task.text} readOnly isDarkMode={isDarkMode} />
      <DeleteIcon
        className="delete-icon"
        src="/delete-icon.svg"
        alt="Delete"
        onClick={() => handleDelete(id)}
      />
    </InputContainer>
  );
};

const DivBox = styled.div`
  width: 327px;
  height: 370px;
  border-radius: 5px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000a6" : "#ffffff")};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  @media (min-width: 1440px) {
    width: 540px;
    height: 439px;
  }
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px;
  border-bottom: 1px solid #ccc;
  position: relative;
  cursor: grab;
  &:hover .delete-icon {
    opacity: 1;
    visibility: visible;
  }
`;

const CheckIcon = styled.img`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

const StyledInput = styled.input`
  flex: 1;
  font-size: 13px;
  border: none;
  cursor: pointer;
  background: transparent;
  outline: none;
  color: ${({ isDarkMode }) => (isDarkMode ? "#ffffff" : "#000000")};
  &::placeholder {
    color: ${({ isDarkMode }) => (isDarkMode ? "#aaa" : "gray")};
  }
`;

const DeleteIcon = styled.img`
  width: 13px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  right: 10px;
  opacity: 0;
  visibility: hidden;
  transition: opacity 0.3s ease, visibility 0.3s ease;
`;

const SmallDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  background-color: ${({ isDarkMode }) => (isDarkMode ? "#000000a6" : "#ffffff")};
  @media (min-width: 1440px) {
    margin-top: 16px;
  }
`;

const HowMany = styled.p`
  color: ${({ isDarkMode }) => (isDarkMode ? "#aaa" : "#ccccccd9")};
  font-size: 14px;
  @media (min-width: 1440px) {
    font-size: 16px;
  }
`;

const Span = styled.span`
  color: ${({ isDarkMode }) => (isDarkMode ? "#aaa" : "#ccccccd9")};
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: darkblue;
  }
`;

export default Main;
