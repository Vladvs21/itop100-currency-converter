import styled from 'styled-components'

export const FooterCon = styled.footer`
    width: 100%;
    height: 10vh;

    padding: 2vh 0;

    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;

    div {
        position: relative;
        cursor: pointer;
        
        &:after {
            position: absolute;
            content: '';
            height: 1px;
            left: 0;
            right: 100%;
            bottom: 0;
            transition: all .3s ease-in-out;
            background: black;
        }

        &:hover:after {
            right: 0;
        }
    }
`