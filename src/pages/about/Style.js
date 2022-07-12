import styled from "styled-components";

export const AboutContainer = styled.div`
/* background-color: blueviolet; */
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
a{
    /* text-decoration: none; */
    color: yellow;
    font-size: 1.5rem;
}
img{
    width: 600px;
}
@media(max-width:500px){
    img{
        width: 300px;
    }
}
`