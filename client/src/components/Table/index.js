import React, { PureComponent } from 'react';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  grid-area: row;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  font: 16px Helvetica, arial, sans-serif;
  font-size: 18px;
  font-weight: 600;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "title"
          "subject"
          "body";
          
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
            "title    subject body";
  } 
`;

export const Header1 = styled.div`
   grid-area: title;
   display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const Header2 = styled.div`
   grid-area: subject;
   display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const Header3 = styled.div`
   grid-area: body;
   display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const RowWrapper = styled.div`
  grid-area: row;
  width: 100%;
  height: 40px;
  margin: 0 auto;
  font: 16px Helvetica, arial, sans-serif;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "title"
          "subject"
          "body";
          
  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-areas:
            "title    subject body";
  } 
`;

export const Title = styled.div`
  grid-area: title;
  border: 1px solid black;
  display: flex;
  align-items: center;
  padding: 0 12px;
  
  @media (min-width: 700px) {
  }
`;

export const Subject = styled.div`
   grid-area: subject;
   border: 1px solid black;
   display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const Body = styled.div`
   grid-area: body;
   border: 1px solid black;
   display: flex;
  align-items: center;
  padding: 0 12px;
`;

export const MainWrapper = styled.div`
  margin-right: 18px;
  max-width: 100%;
  box-shadow: 0 2px 4px 0 rgba(0,0,0,0.17);
  padding: 18px 24px;
  
  @media (min-width: 1400px) {
    max-width: 50%;
  } 
  
`;

export function renderRows(surveyList) {
  return(
    surveyList.map((survey, index) => {
      const { title, subject, body } = survey;
      return (
        <RowWrapper key={index}>
          <Title>
            <div>{title}</div>
          </Title>
          <Subject>
            <div>{subject}</div>
          </Subject>
          <Body >
          <div>{body}</div>
          </Body>
        </RowWrapper>
      );
    })
  );
}
class Table extends PureComponent {
  render() {
    const { surveyList } = this.props;
    return (
      <MainWrapper>
        <HeaderWrapper>
          <Header1>
            <div>Title</div>
          </Header1>
          <Header2>
            <div>Subject</div>
          </Header2>
          <Header3 >
          <div>Body</div>
          </Header3>
        </HeaderWrapper>
        {surveyList.length ? renderRows(surveyList) :
          <p>
            You have not created any surveys. In order to create a survey,
            add email credits and click Create Survey.
          </p>
        }
      </MainWrapper>
    );
  }
}

export default Table;
