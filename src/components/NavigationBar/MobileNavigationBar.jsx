import styled from 'styled-components';

import Icon from '../../common/icons';

const MobileNavigationBar = () => {
  
  const mainFeatures = ["홈", "탐색", "커리어 성장"];
  
  return (
    <MobileNavigationBarLayout>
      <MainFeatureList>
        {mainFeatures.map((feature, i) => {
          return (
            <li key={`main-feature-${i}`}>
              <MainFeatureButton> {feature} </MainFeatureButton>
            </li>
          );
        })}
      </MainFeatureList>
      <UserFeatureList>
        <li> 
          <button>
            <Icon.MagnifyingGlass />
          </button>
        </li>
        <li> 
          <button>
            <Icon.Bell/>
          </button>
        </li>
        <li> 
          <button>
            <Icon.Hamburger/>
          </button>
        </li>
      </UserFeatureList>
    </MobileNavigationBarLayout>
  )
}

const MobileNavigationBarLayout = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  justify-content: space-between;
`;

const MainFeatureList = styled.ul`
  display: flex;
  align-items:center;
  
  & > li {  
    height: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
  }
  li:first-child {
    box-shadow: inset 0 -2px #258bf7;
  }
`;

const MainFeatureButton = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;
`;

const UserFeatureList = styled.ul`
  display: flex;
  align-items:center;
  li {
    padding: 0 10px;
    button {
      cursor: pointer;
    }
  }
`;

export default MobileNavigationBar;