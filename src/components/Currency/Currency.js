import styled from 'styled-components'

export const CurrencyCon = styled.div`
    position: relative;
    width: fit-content !important;
    height: auto !important;
    margin: 0 15px;
    padding: 0 15px;
    border-radius: 4px;

    display: flex !important;
    flex-direction: column;
    align-items: center;

    background-position: 50% 50%;

    div {
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background: white;
        opacity: .8;
    }

    span {
        font-size: 12px;
        z-index: 2;
    }

    p {
        margin: 0;
        z-index: 2;
        white-space: nowrap;
    }
`