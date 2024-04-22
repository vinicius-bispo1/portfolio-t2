import styled,{createGlobalStyle} from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    list-style: none;
}
`

export const Header = styled.header`
/* border: solid 2px; */
background-color:#4A5051;
width: 15vw;
display: flex;
align-items: center;
flex-direction: column;
   @media(max-width: 700px) {
      width: 20vw;
   }
    @media(max-width: 500px) {
      width: 100%;
      height: 33vh;
   }
`;
export const BoxLogo = styled.div`
/* border: solid 2px yellow; */
width: 100%;
height: 35vh;
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-evenly;
img{
    width: 11vw;
}
 @media(max-width: 500px) {
      width: 100%;
      flex-direction: row;
      height: 9vh;
   }
`;
export const Title = styled.h2`
/* border: solid 2px green;  */
   width: 100%;
   text-align: center;
   color: white;
`;
export const Text = styled.p`
/* border: solid 2px green; */
width: 100%;
text-align: center;
color: white;
@media (max-width: 500px) {
    /* display: none; */
}
`;

export const BoxMenu = styled.nav`
/* border: solid 2px green; */
height: 35vh;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
ul{
    /* border: solid 2px red; */
    width: 100%;
}
`;
export const Lista = styled.li`
 /* border: solid 2px white; */
 height: 11.5vh;
 display: flex;
align-items: center;
justify-content: center;
border-bottom: solid 1px white;
border-top:${props => props.linha};
/* border-top: solid 1px white; */
a{
    color: white;
}
 @media(max-width: 500px) {
      height: 8vh;
   }
`

export const BoxIcon = styled.div`
/* border: solid 2px red; */
height: 29vh;
width: 100%;
 display: flex;
align-items: center;
justify-content: space-evenly;
flex-direction: column;
 .borda{
        border-radius: 21px;
    }
img{
    background-color: white;
    border-radius: 5px;
   
}
@media (max-width: 500px) {
    display: none;
}
`