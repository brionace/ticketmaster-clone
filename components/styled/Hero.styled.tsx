import styled from "styled-components"

interface HeroContainerProps {
    bgImage?: string
}

export const HeroContainer = styled.div<HeroContainerProps>`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    color: white;
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5) 60%, transparent 90%), url("${({ bgImage }) => bgImage}"); 
    background-repeat: no-repeat;
    background-position: 50% 0px;
    background-size: cover;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 5px 20px 0px;
    min-height: 30vw;

    .container{
        padding: 40px;

        @media(min-width: 768px){
            margin-left: 40px;
        }

        h3{
            font-size: 32px;
            margin-bottom: 0;
        }
    }
`