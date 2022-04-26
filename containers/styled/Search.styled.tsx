import styled from "styled-components"

export const SearchFormWrapper = styled.div`
    position: relative;
    padding-top: 24px;
    padding-bottom: 24px;

    @media (min-width: 720px){
        padding-left: 16px;
        padding-right: 16px;
        font-size: 18px;
    }

    .container{
        position: relative;
        display: flex;
        flex-shrink: 0;
        border-radius: 4px;
        transition: background-color 0.3s ease 0s;
        border: 1px solid rgba(255, 255, 255, 0.7);
        color: rgb(255, 255, 255);
        background-color: rgba(255, 255, 255, 0.12);
        z-index: 1;

        &:hover{
            border: 1px solid rgb(255, 255, 255);
            color: rgb(38, 38, 38);
            background-color: rgb(255, 255, 255);

            svg path {
                stroke: #026cdf;
            }
        }

        svg path {
            stroke: white;
        }

        input {
            flex-grow: 1;
            padding: 8px 0px 8px 16px;
            border: none;
            border-radius: 4px;
            color: currentcolor;
            font-size: inherit;
            background-color: transparent;
            appearance: none;

            &::-webkit-input-placeholder{
                color: white;
            }
            
            &:focus{
                outline: none
            }
        }

        button{
            display: flex;
            margin: initial;
            font-weight: inherit;
            font-size: inherit;
            font-family: inherit;
            line-height: inherit;
            letter-spacing: inherit;
            text-align: inherit;
            text-transform: inherit;
            color: currentcolor;
            padding: 10px;
            border: none;
            border-radius: 4px;
            background-color: transparent;
            cursor: pointer;

            &:hover{
                background-image: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.176));
                color: rgb(255, 255, 255);
                background-color: rgb(2, 108, 223);
            }
        }
    }
`

export const ResultsList = styled.div`

    position: absolute;
    top: 100%;
    left: 0px;
    width: 100%;
    margin-top: 2px;
    border-radius: 2px;
    background-color: rgb(255, 255, 255);
    box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px 3px;
    transform: translate3d(0px, 0px, 1px);

    h4{
        position: relative;
        margin: 0px;
        padding: 8px 16px;
        border-bottom: 1px solid rgb(191, 191, 191);
        color: rgb(28, 28, 28);
        font-weight: 900;
        font-size: 16px;
    }

    ul{
        margin-top: 0px;
        padding-left: 0px;
        list-style-type: none;
        li {
            a{
                position: relative;
                display: block;
                min-height: 44px;
                padding: 8px 40px 8px 16px;
                border-bottom: 1px solid rgb(191, 191, 191);
                color: rgb(38, 38, 38);
                font-size: 16px;
                text-decoration: none;

                &:hover{
                    color: rgb(1, 81, 167);
                }
            }
        }
    }
`