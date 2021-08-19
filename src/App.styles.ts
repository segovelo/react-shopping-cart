import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';

export const Wrapper = styled.div`
    margin: 40px;
`;

export const StyledButton = styled(IconButton)` 
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
    border-radius: 10px;
    border: 2px solid #858585;
    padding: 5px;
`;

export const StyledArrowButton = styled(IconButton)`
    position: fixed;
    z-index: 100;
    right: 20px;
    top: 20px;
    border-radius: 10px;
    border: 2px solid #858585;
    padding: 5px;
`;

export const StyledDrawer = styled(Drawer)` 
    width=1000px;
`;