import React, { PureComponent } from 'react';
import styled from 'styled-components';
import Container from '../../components/Container';

export const MainWrapper = styled.div`
  max-width: 100%;
  height: 100vh;
  margin: 0 auto;
  font: 1.2em Helvetica, arial, sans-serif;
  border: 1px solid green; 
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "header"
          "nav"
          "content"
          "sidebar"
          "ad"
          "footer";
          
  @media (min-width: 700px) {
    grid-template-columns: 1fr 4fr 1fr;
    grid-template-areas:
            "header header  header"
            "nav    content sidebar"
            "nav    content ad"
            "footer footer  footer"

  } 
`;

export const Header = styled.header`
   grid-area: header;
   border: 1px solid green;
`;

export const Navbar = styled.nav`
   grid-area: nav;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  @media (min-width: 700px) {
    > ul {
        flex-direction: column;
    }
  }
`;

export const Content = styled.article`
   grid-area: content;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Sidebar = styled.aside`
   grid-area: sidebar;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Advert = styled.div`
   grid-area: ad;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

export const Footer = styled.footer`
   grid-area: footer;
   border: 1px solid green;
   
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
`;

class Home extends PureComponent {
  render() {
    return (
      <MainWrapper>
        <Header>The header</Header>
        <Navbar>
          <ul>
            <li><a href="">Nav 1</a></li>
            <li><a href="">Nav 2</a></li>
            <li><a href="">Nav 3</a></li>
          </ul>
        </Navbar>
        <Content>
          <h1>Main article area</h1>
          <p>In this layout, we display the areas in source order for any screen less that 500 pixels wide. We go to a two column layout, and then to a three column layout by redefining the grid, and the placement of items on the grid.</p>
        </Content>
        <Sidebar >Sidebar</Sidebar>
        <Advert>Advertising</Advert>
        <Footer>The footer</Footer>
      </MainWrapper>
    );
  }
}

export default Home;
