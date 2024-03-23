import axios from 'axios';
import { foodItem } from '../types';

export const notFoundState = {
  id: 0,
  imageUrl: '',
  fullImageUrl: '',
  title: '',
  price: 0,
  category: -1,
  rating: 0,
  description: '',
  ingredients: '',
  nutrition: {
    weight: 0,
    ccals: 0,
    protein: 0,
    carbs: 0,
    fats: 0,
  },
};

export default class foodService {
  static async getAll() {
    try {
        const response = await axios.get<foodItem[]>(
            'https://6383b9836e6c83b7a99a55c5.mockapi.io/items',
          );
      
          return response.data
    } catch (error) {
        console.log(error);
        
        }
    
  }

  static async getById(id: string) {
    const response = await axios.get<foodItem[]>(
      `https://6383b9836e6c83b7a99a55c5.mockapi.io/items?id=${id}`,
    );
    return response ? response.data[0] : notFoundState;
  }
}
