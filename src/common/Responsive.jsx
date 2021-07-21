import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  margin: 0 auto; /* 중앙 정렬 */
  box-sizing: border-box;

/* 브라우저 크기에 따라 가로 크기 변경 */
  @media (min-width: 1200px) { // 1200px을 넘어갈 때 크기 제한 후 중앙정렬
    max-width: 1080px;
    margin: auto;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    width: 90%;
    margin:0 auto;
  }
  @media (min-width: 768px) and (max-width: 991px) {
    width: 90%;
    margin:0 auto;
  }
  @media (max-width: 767px) { // 브라우저가 768 미만일때 
    width: 100%;
  }
`;


const Responsive = ({ children, ...rest }) => {
  // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
  // …rest를 사용하여 ResponsiveBlock에게 전달
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;