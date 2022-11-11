import styled from 'styled-components'

export const HeaderCon = styled.header`
    width: 100%;
    height: 16vh;

    padding: 2vh 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .currencies {
        width: 100%;
        height: 6vh;
        overflow-x: auto;

        display: flex;

        &::-webkit-scrollbar {
            display: none;
        }
    }

    input {
        border: none;
        outline: none;
        border-bottom: 1px solid lightgray;
        padding: 10px 15px;
    }
`