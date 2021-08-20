import styled from 'styled-components';
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    border-bottom: 1px solid lightblue;
    padding-bottom: 20px;

    div {
        flex: 1;
    }

    .information, .buttons {
        display: flex;
        justify-content: space-between;
    }
    .item-amount {
        font-size: 20px;
        font-weight: bold;
        margin-top: 5px;
    }

    img {
        max-width:80px;
        object-fit: cover;
        margin: auto 10px;
    }
`;

export const StyledButton2 = styled(Button)` 
    font-size: 40px;
    font-weight: bold;
    border-radius: 10px;
    border: 2px solid #858585;
    padding: 10px;
    height:40px;
    : hover {
        background-color: #858585;
    }
`;

export const StyledButton = styled(IconButton)`
    border-radius: 10px;
    border: 2px solid #858585;
    padding: 10px;
    height:40px;
    background-color: #E5E5E5;
    : hover {
        background-color: #858585;
    }
`;