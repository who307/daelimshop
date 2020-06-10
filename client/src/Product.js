// import React from "react";
// import styled from "styled-components";

// class Product extends React.Component {
//   render() {
//     const products = this.props.product.map((pro) => {
//       return (
//         <ProductInfo key={pro.key}>
//           <a href="">
//             <ProductImgDiv>
//               <img src={pro.img} alt="d" />
//             </ProductImgDiv>
//             <ProductAccount>
//               <ProductTitle>{pro.name}</ProductTitle>
//               <Price>{pro.price}</Price>
//             </ProductAccount>
//           </a>
//         </ProductInfo>
//       );
//     });
//     return (
//       <ProductContainer>
//         <div>
//           <Title>전체</Title>
//           <ProductList>
//             { products }
//           </ProductList>
//         </div>
//       </ProductContainer>
//     );
//   }
// }

// const ProductContainer = styled.div`
//   display: flex;
//   justify-content: center;
//   padding: 35px 0;

//   > div {
//     width: 1200px;
//   }
// `;

// const Title = styled.div`
//   font-size: 24px;
//   font-weight: bold;
// `;

// const ProductList = styled.div`
//   padding: 30px 0;
//   display: flex;
//   width: 1200px;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   height: auto;
// `;

// const ProductInfo = styled.div`
//   width: 225px;
//   height: 290px;
//   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.25);
//   border-radius: 20px;
//   margin-bottom: 20px;
// `;

// const ProductImgDiv = styled.div`
//   width: 225px;
//   height: 190px;

//   >img {
//     width: 100%;
//     height: 100%;
//     border-top-left-radius: 20px;
//     border-top-right-radius: 20px;
//   }
// `;

// const ProductAccount = styled.div`
//   padding: 20px 15px;
// `;

// const ProductTitle = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   margin-bottom: 15px;
// `;
// const Price = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   font-size: 24px;
//   font-weight: bold;
// `;

// export default Product;
