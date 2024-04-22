/** @format */

import styled from "styled-components";

export const Main = styled.main`
  /* border: solid 2px red; */
  height: 100vh;
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

export const Container = styled.section`
  /* border: solid blue 2px; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
 background-color: #839697;
 
`;
export const BoxInicio = styled.div`
/* border: solid red 2px; */
width: 80%;
display: flex;
align-items: center;
color: white;
h2{
  font-size: 3rem;
}
img{
  width: 20vw;
}
`

export const Cv = styled.button`
padding: 10px 20px;
background-color: #89b4d2;
border: none;
border-radius: 10px;
color: white;
  &:hover{
    padding: 11px 21px;
    background-color: #506c7f;
  }
`
