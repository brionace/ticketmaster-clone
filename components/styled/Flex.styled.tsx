import styled from "styled-components"

export const Flex = styled.div`
    display: flex;
    flex-grow: 1;
    align-items: stretch;
    flex-direction: column;

    @media(min-width: 768px) {
        flex-direction: row;
    }
`