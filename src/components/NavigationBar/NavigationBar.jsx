import { useState } from 'react';
import styled, { css } from 'styled-components';

import SearchCategories from './SearchCategories';
import Icon from '../../common/icons';

const NavigationBar = () => {

  const mainFeatures = ["커리어 성장", "직군별 연봉", "이력서", "매치업", "프리랜서", "Ai 합격예측"];
  const [isActive, setIsActive] = useState(false);

  const handleSearchCategoryShow = () => {
    setIsActive(true);
  }
  const handleSearchCategoryHidden = () => {
    setIsActive(false);
  }

  return (
    <NavigationBarLayout>
      <Logo href="#"> 
        <Icon.Wanted />
      </Logo>
      <MainFeatureList>
        <li>
          <MainFeatureButton onMouseOver={handleSearchCategoryShow} onMouseOut={handleSearchCategoryHidden}> 탐색 </MainFeatureButton>
        </li>
        {mainFeatures.map((feature, i) => {
          return (
            <li key={`main-feature-${i}`}>
              <MainFeatureButton> {feature} </MainFeatureButton>
            </li>
          )
        })}
      </MainFeatureList>
      <SearchCategoryLayer isActive={isActive} >
        <SearchCategories onMouseOver={handleSearchCategoryShow} onMouseOut={handleSearchCategoryHidden} />  
      </SearchCategoryLayer>
      <UserFeatureList> 
        <ul>
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
          <li> 이미지 </li>
          <li> 
            <SearchBarButton> 기업 서비스 </SearchBarButton>
          </li>
        </ul>
      </UserFeatureList>
      
    </NavigationBarLayout>
  )
}

const NavigationBarLayout = styled.nav`
  height: 50px;
  
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a``;

const MainFeatureList = styled.ul`
  display: flex;
  flex: 1;
  justify-content: space-evenly;
  
  & > li {  
    height: 100%;
    cursor: pointer;

    display: flex;
    align-items: center;
    
    :hover {
      box-shadow: inset 0 -2px #ddd;
    }
  }
`;

const MainFeatureButton = styled.a`
  position: relative;
  font-size: 14px;
  line-height: 20px;
  font-weight: 600;
  padding: 15px;

  @media (min-width: 768px) and (max-width: 991px) {
    margin:0 auto;
    /* padding-right: 0!important;
    padding-left: 0!important; */
    font-size: 13px;
    padding-right: 0;
    padding-left: 0;
  }
  @media (max-width: 767px) { // 브라우저가 768 미만일때 
    width: 100%;
  }
`;

const UserFeatureList = styled.aside`
  & > ul {
    display: flex;
    align-items: center;

    li {
      height: 100%;
      padding: 0 10px;
      font-size: 14px;
      color: #333;
      font-weight: 600;
      line-height: 1;
      cursor: pointer;
    }

    li:last-child {
      display: flex;
      align-items: center;
      
      ::before {
        display: block;
        content: "";
        width: 1px;
        height: 10px;
        background-color: #e1e2e3;
        margin: 0 20px 0 0;
      }
    }
  }
`;

const SearchCategoryLayer = styled.div`
  background-color: rgb(0, 0, 0, .2);
  overflow: hidden;
  
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 50px;
    
  /* for transition */
  opacity: 0;
  height: 0;
  
  @media (max-width: 767px) {
    & {
      display: none;
    }
  }
  
  ${props => props.isActive && 
    css`
      transition-property: opacity, height;
      transition-duration: .5s, .5s;
      opacity: 1;
      height: 100%;

      /* transition: all .5s ease-in-out;
      transform-origin: left top opacity; */
      /* transform: scaleY(1); */
    `
  }
`;

const SearchBarButton = styled.button`
  height: 30px;
  padding: 0 10px;
  border: 1px solid #e1e2e3;
  border-radius: 15px;

  color: #666;
  font-size: 13px;
  font-weight: 400;
  line-height: 30px;
`;

export default NavigationBar;