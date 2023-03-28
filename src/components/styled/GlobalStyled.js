import {createGlobalStyle} from "styled-components";


const GlobalStyled = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
}
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');




body{
  font-family: ${({theme})=>theme.fontFamily.Lato};
    
}



ol,
ul {
    list-style: none;
    margin-bottom: 0 !important;
}

a,
a:hover,
a:focus {
    text-decoration: none;
    outline: 0;
}

`

export default GlobalStyled;