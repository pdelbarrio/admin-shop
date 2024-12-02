export const getProductImageAction = (imageName: string): string => {
  return imageName.includes('http')
    ? imageName
    : `${import.meta.env.VITE_TESLO_API_URL}/files/product/${imageName}`;
};

// export const getProductImageAction = (imageName: string): string => {
//   const defaultImageUrl = 'https://res.cloudinary.com/getoutbcn/image/upload/v1732977961/samples/ecommerce/camiseta_ngmh6h.jpg';

//   if (!imageName) {
//     return defaultImageUrl;
//   }

//   return imageName.includes('http')
//     ? imageName
//     : `${import.meta.env.VITE_TESLO_API_URL}/files/product/${imageName}`;
// };
