import styled from "styled-components"

export const Colors = {
    primary: 'rgb(248, 99, 0)',
    secondary: '#1E1E20',
    bright: '#FFA061',
    grey: 'rgb(117, 117, 117)',
    black: '#18191B',
    white: '#fff',
}

export const Effects ={
    sombra: 'none',  //'drop-shadow(0px 0px 10px rgba(0, 0, 0))',//
    sombrinha: 'drop-shadow(0px 0px 5px rgba(0, 0, 0, 0.4))',
    brilho: 'none' //drop-shadow(0px 0px 5px rgba(248, 99, 0))//
}

export const Bgradient ={
    preto:'linear-gradient(40deg, rgba(15,15,15,1) 27%, rgba(34,34,34,1) 100%)',
    cinza:'linear-gradient(0deg, rgba(15,15,15,1) 27%, rgba(34,34,34,1) 100%)',
    laranja: 'linear-gradient(0deg, rgba(217,77,2,1) 0%, rgba(248,99,0,1) 53%, rgba(255,117,25,1) 100%)',
    branco: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,117,25,1) 100%);',
}

export const FontSizes = {

    //the taller the animal, the larger the font-size is! I though it's better in this way than "small, medium , large" or "xs, xl..."

    giraffe: '98px',
    hippo: '82px',
    horse: '70px',
    bigWolf: '50px',
    wolf: '32px',
    cat: '24px',
    rat: '16px',
}

export const Button = styled.button`
//full centro + horizontal
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    border: 3px solid ${Colors.primary};
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    font-weight: 300;
`




export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`
export const Column = styled(Container)`
    flex-direction: column;
`
export const FlexStartAlign = styled(Container)`
//full esquerda + vertical
  text-align: left;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  @media (max-width: 800px){
    align-items: center;
    justify-content: center;
  }
`

//Bg é Background
export const BgBlack = styled.div`
    width: 70%;
    background: ${Bgradient.cinza};
    height: 900px;

    @media (max-width: 800px){
        width: 100%;
    }

    @media (max-width: 600px){
        height: 700px;
    }
`

export const BgOrange = styled(BgBlack)`
  background: ${Bgradient.laranja};
  width: 30%;

  @media (max-width: 800px){
    display: none;
  }
`
export const BgContainer = styled(Container)`
  position: absolute;
  top: 65px;
  width: 100%;
  height: 600px;
  z-index: -2;
  `

export const Paragraph = styled.p`
font-size: ${FontSizes.rat};
color: ${Colors.black};
`
