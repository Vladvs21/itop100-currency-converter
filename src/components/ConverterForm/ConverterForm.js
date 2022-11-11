import styled from 'styled-components'
import exchange from '../../assets/img/exchange.svg'

export const ConverterFormCon = styled.div`
    padding: 10px 20px 20px;

    box-shadow: 5px 5px 20px rgba(0, 0, 0, .15);
    border-radius: 10px;

    .form-title {
        width: 100%;
        text-align: center;
    }

    .currency-input {
        border: none;
        outline: none !important;
        background: transparent;
        border-bottom: 1px solid lightgray;
        text-align: end;

        &::-webkit-outer-spin-button,
        &::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        -moz-appearance: textfield;
    }

    .currency-select {
        position: relative;
        padding: 5px 20px 5px 0;
        margin-right: 20px;

        border: none;
        border-bottom: 1px solid lightgray;
        background: transparent;

        display: flex;
        align-items: center;
        cursor: pointer;

        .currency-flag {
            width: 16px;
            height: 12px;
            margin-right: 5px;
        }

        &:after {
            content: '';
            position: absolute;
            right: 0;
            top: 50%;
            transform: translateY(-50%) rotate(0);
            width: 0;
            height: 0;
            border-left: 5px solid transparent;
            border-right: 5px solid transparent;
            border-top: 5px solid lightgray;
            clear: both;
            transition: all .3s ease-in-out;
        }

        &[aria-expanded=true]:after {
            transform: translateY(-50%) rotate(180deg);
        }
    }

    .exchange {
        position: relative;
        width: 50px;
        height: 40px;
        background: lightgray;
        box-shadow: 2px 2px 4px rgba(0, 0, 0, .15);
        border-radius: 4px;
        cursor: pointer;

        img {
            position: absolute;
            width: auto;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%) rotate(90deg);
            transition: all .3s ease-in-out;
        }

        &:hover img {
            transform: translate(-50%, -50%) rotate(-90deg);
        }
    }

    .rate {
        height: 40px;
        padding: 5px 10px;

        display: flex;
        justify-content: center;
        align-items: center;

        background: lightgray;
        color: gray;
        border-radius: 2px;
        cursor: pointer;
    }

    .uk-dropdown {
        height: 100px;
        overflow-x: hidden;
        overflow-y: auto;
        padding: 5px 10px;

        &::-webkit-scrollbar {
            display: none;
        }

        & > div {
            display: flex;
            flex-direction: row;
            align-items: center;
            margin: 5px 0;
            cursor: pointer;

            & .currency-flag {
                margin-right: 10px;
            }

            span {
                margin-left: auto;
                font-size: 12px;
                opacity: .8;
            }
        } 
    }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 20px 0 0;
`