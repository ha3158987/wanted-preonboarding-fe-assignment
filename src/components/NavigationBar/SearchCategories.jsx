import styled from 'styled-components';
import Responsive from '../../common/Responsive';

import SearchCategory from './SearchCategory';
import { categoryData, otherCategories } from '../../util/data';

const SearchCategories = ({onMouseOver, onMouseOut}) => {

  return (
    <SearchCategoriesLayout onMouseOver={onMouseOver} onMouseOut={onMouseOut} >
      <SearchCategoriesContentsLayer>
        {categoryData.map((category, i) => {
          return <SearchCategory key={`category-${i}`} title={category.title} contents={category.contents} />
        })}
        <SearchCategory others={otherCategories} />
      </SearchCategoriesContentsLayer>
    </SearchCategoriesLayout>
  )
}

const SearchCategoriesLayout = styled.div`
  max-height: 675px;
  background-color: #fff;
  /* transition: .5s; */
`;

const SearchCategoriesContentsLayer = styled(Responsive)`
  display: grid;
  grid-template-columns: repeat(6, 1fr)
`;

export default SearchCategories;