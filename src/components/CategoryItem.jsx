import React from "react";
import styled from "styled-components";

const Image = styled.img`
  opacity: 1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 0.5s ease;
`;

const Button = styled.button`
  border: none;
  padding: 10px;
  background-color: white;
  color: gray;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.5s ease;
`;

const Title = styled.h1`
  font-size: 45px;
  color: white;
  margin-bottom: 20px;
  transition: all 0.5s ease;
`;

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;

  &:hover ${Image} {
    opacity: 0.6;
  }

  &:hover ${Button} {
    transform: scale(1.2);
    background-color: #0b6969;
    color: white;
  }

  &:hover ${Title} {
    transform: scale(1.2);
    color: #0b6969;
  }
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  );
};

export default CategoryItem;
