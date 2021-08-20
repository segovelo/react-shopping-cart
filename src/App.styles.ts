import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)` 
    position: fixed;
    z-index: 100;
    right: 10px;
    top: 10px;
    border-radius: 10px;
    border: 2px solid #858585;
    padding: 5px;
    width:30px;
    height:30px;
    background-color: #EEEEEE;
    : hover {
        background-color: #7F7F7F;
    }
`;

export const StyledArrowButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 300px;
    top: 5px;
    border-radius: 5px;
    border: 2px solid #858585;
    padding: 5px;   
    height:30px;
    background-color: #EEEEEE;
    : hover {
        background-color: #7F7F7F;
    }
`;

export const StyledEmptyButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 5px;
    border-radius: 5px;
    border: 2px solid #858585;
    padding: 5px;   
    height:30px;
    background-color: #EEEEEE;
    : hover {
        background-color: #7F7F7F;
        
    }
`;

