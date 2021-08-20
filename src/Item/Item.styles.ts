import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    border: 2px solid lightblue;
    border-radius: 20px;
    height:100%;

    img {
        max-height: 250px;
        object-fit: cover;
        padding:10px;
        border-radius: 20px 20px 0 0;
    }

    div {
        font-family: Arial, Helvetica, sans-seriff;
        padding: 1rem;
        height:100%;
    }
`;

export const StyledButton = styled(Button)`
    font-size: 16px;
    font-weight: bold;
    padding:10px;
    border-radius: 20px;
    border: 2px solid #CEEBED;
    margin:10px;
    background-color: #DAEBED;
    : hover {
        background-color: #858585;
    }
`;