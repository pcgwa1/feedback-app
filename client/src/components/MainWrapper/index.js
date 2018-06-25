import styled from 'styled-components';

export const MainWrapper = styled.div`
  max-width: 100%;
  height: 100%;
  margin: 0 auto;
  bottom: 0;
  font: 1.2em Helvetica, arial, sans-serif;
  display: grid;
  grid-gap: 0;
  grid-template-areas:
          "header"
          "nav"
          "content"
          "footer";
          
  ${props => props.theme.breakpoints.tablet} {
    height: 100vh;
    grid-template-columns: 1fr 5fr;
    grid-template-areas:
            "nav    header "
            "nav    content"
            "nav    content "
            "nav    footer ";

  } 
`;

export const HeaderWrapper = styled.header`
   grid-area: header;
   display: flex;
   justify-content: center;
   align-items: center;
   height: 80px;
   background: #fff;
`;

export const Navbar = styled.nav`
   grid-area: nav;
   box-shadow: 0 1px 1px 0 rgba(0,0,0,0.17);
   ${props => props.hide ? 'display: none' : ''};
   > ul {
      list-style: none;
      margin: 0;
      padding: 0;
  }
  
  ${props => props.theme.breakpoints.tablet} {
    > ul {
        flex-direction: column;
    }
  }
`;

export const Content = styled.article`
   grid-area: content;
   padding: 0 12px;
   height: 100%;
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
