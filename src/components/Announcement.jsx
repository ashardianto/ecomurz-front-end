import styled from "styled-components";
import React from "react";
import { mobile } from "../responsive";

const Container = styled.div`
  height: 30px;
  background-color: teal;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-weight: 500;
  ${mobile({ fontSize: "10px" })}
`;

const Announcement = () => {
  return (
    <Container>
      6.6 Deal! Free Shipping on Orders Over IDR 1.000.000,00-
    </Container>
  );
};

export default Announcement;
