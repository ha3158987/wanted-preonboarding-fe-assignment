import { useEffect, useState } from 'react';
import styled from 'styled-components';

import Responsive from '../common/Responsive';
import NavigationBar from '../components/NavigationBar/NavigationBar';
import MobileNavigationBar from '../components/NavigationBar/MobileNavigationBar';

const HomePage = () => {
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return { width, height };
  }  

  useEffect(() => {
    const handleResize = () => {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  })

  if (!windowDimensions.width) return <></>;
  return (
    <HomePageLayout>
      <NavigationBarLayer>
          <NavigationBarBlock>
            {
              windowDimensions.width > 768 
              ?  <NavigationBar /> 
              : <MobileNavigationBar />
            }
          </NavigationBarBlock>
      </NavigationBarLayer>
    </HomePageLayout>
  )
}

const HomePageLayout = styled.div`
  width: 100%;
`;

const NavigationBarLayer = styled.div`
  width: 100%;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 10%);
`

const NavigationBarBlock = styled(Responsive)``;



export default HomePage;