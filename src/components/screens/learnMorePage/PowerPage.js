import React, { useEffect } from "react";
import styled from "styled-components";
import DashboardHomeBtns from "../../DashboardHomeBtns";

const LearnMorePage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Content>
        <Title>Power</Title>
        <Text>
          Text About Power Text About PowerText About PowerText About PowerText
          About PowerText About PowerText About Power Text About PowerText About
          PowerText About PowerText About PowerText About PowerText About
          PowerText About Power Text About PowerText About PowerText About
          PowerText About PowerText About PowerText About PowerText About Power
        </Text>
        <DashboardHomeBtns></DashboardHomeBtns>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin: 22px 0px;
`;

const Text = styled.p`
  font-size: 24px;
  line-height: 1.5;
  text-align: justify;
`;

export default LearnMorePage;
