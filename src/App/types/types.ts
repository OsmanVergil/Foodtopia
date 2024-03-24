export interface foodItem {
    id: number;
    imageUrl: string;
    fullImageUrl: string;
    title: string;
    price: number;
    category: number;
    rating: number;
    description: string;
    ingredients: string;
    nutrition: {
        weight: number;
        ccals: number;
        protein: number;
        carbs: number;
        fats: number;
    }
}

export interface cartItem {
    id: number;
    imageUrl: string;
    title: string;
    price: number;
    qty: number;
}