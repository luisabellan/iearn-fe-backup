
import React from 'react'
import DesktopNavigation from './DesktopNavigation';
import MobileNavigation from './MobileNavigation';
import useWindowWidth from '../../hooks/useWindowWidth';


const Navigation = (props) => {

  return (
    <>
      {useWindowWidth() >= ((props) => props.theme.breakpoints['mobile']) ? <DesktopNavigation linkText="iEarn Careers" /> : <MobileNavigation linkText="iEarn Careers" />}

    </>


  );
};

export default Navigation;
