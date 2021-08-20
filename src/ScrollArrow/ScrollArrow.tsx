import React, {useState} from 'react';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import {StyledScrollArrow} from './ScrollArrow.styles';

const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 200){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 200){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
      <StyledScrollArrow style={{display: showScroll ? 'flex' : 'none'}}>
        < ArrowUpwardOutlinedIcon className="scrollTop" onClick={scrollTop} style={{display: showScroll ? 'flex' : 'none'}}/>
      </StyledScrollArrow>
  );
}

export default ScrollArrow;