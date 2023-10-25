import {styled} from "styled-components";
import {createGlobalStyle} from "styled-components"

export const GlobalStyles = createGlobalStyle`
    html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}

blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

export const Receita = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`
export const Titulo = styled.h1`
    background-color: purple;
    color: white;
    font-size: 4vw;
    width: 100%;
    text-align: center;
    padding: 4%;
`

export const ImgPudim = styled.img`
    width: 60%;
`

export const Subtitulo = styled.h2`
    color: purple;
    width: 100%;
    margin: 5%;
    font-size: 3.5vw;
    
`

export const Ingredientes = styled.ul`

    background-color: #c39dc3;
    width: 80%;
    padding: 5% 5% 0 5%;
    justify-content: space-evenly;
    border-radius: 15px;
    font-size: 3vw;
  
`

export const ModoDePreparo = styled.ol`
    background-color: #c39dc3;
    width: 80%;
    padding: 5% 5% 0 5%;
    justify-content: space-evenly;
    border-radius: 15px;
  
`

export const ItemLista = styled.li`
    margin-bottom: 5%;
`

export const Dica = styled.p`
    background-color: #bdbdbd;
    padding: 3%;
    font-size: 3vw;
`

