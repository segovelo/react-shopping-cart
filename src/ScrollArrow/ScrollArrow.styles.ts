import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const StyledScrollArrow = styled(IconButton)`
    position: fixed; 
    width: 30px;
    height: 30px;
    bottom: 30px;
    right:10px;
    z-index: 100;
    cursor: pointer;
    animation: fadeIn 0.3s;
    transition: opacity  0.4s;
    opacity: 1;
    background-color: #97D2ED;
    : hover {
        background-color: #858585;
    }
`;