import styled from 'styled-components';
import Icon from '../../common/icons';

const SearchCategory = ({title, contents, others}) => {
  
  return (
    <SearchCategoryLayout>
      { title && 
        <Title> 
          {title} 
          {title !== "\u00a0" && <Icon.RightArrow />}
        </Title> 
      }
      {contents && 
        contents.map((content, i) => {
          return (
            <Contents key={`content-${i}`}> 
              {content}
              {content === "더보기" && <Icon.RightArrow />}
            </Contents>
          );
        })
      }
      {others && 
        others.map((other, i) => {
          return (<Title key={`other-${i}`}> {other} <Icon.RightArrow /> </Title>)
        })
      }
    </SearchCategoryLayout>
  )
}

const SearchCategoryLayout = styled.div`
  padding: 40px 20px 0 0;
`;

const Title = styled.h2`
  width: 100%;
  
  font-size: 17px;
  color: #333;
  line-height: 20px;
  padding-right: 20px;
  padding-bottom: 15px;
  
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Contents = styled.h3`
  width: 100%;
  font-size: 13px;
  color: #999;
  padding: 5px 20px 5px 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  cursor: pointer;
`;

export default SearchCategory;