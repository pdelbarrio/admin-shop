import { tesloApi } from '@/api/tesloApi';

export const getProductsAction = async (page: number = 1, limit: number = 10) => {
  try {
    const { data } = await tesloApi.get(`/products`);
    console.log(data);
  } catch (error) {
    console.log(error);
    throw new Error('Error getting products');
  }
};
