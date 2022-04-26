import styled from "styled-components"

export const HomeMain = styled.main`
  > section {
    @media (min-width: 768px){
      width: 98%;
    }
  }
`
export const HomeAside = styled.aside`
  display: none;
  @media (min-width: 768px){
    display: block;
    position: relative;
    flex-shrink: 0;
    width: 332px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.3) -4px 4px 8px 0px;
  }

  > section {
    ul{
        padding: 15px;
    }
  }
`