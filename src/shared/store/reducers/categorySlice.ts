import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from '@reduxjs/toolkit';

interface categorySliceProps {
    category: number;
}

const initialState: categorySliceProps = {
    category: 0
}

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
        changeCategory(state, action: PayloadAction<number>) {
            state.category = action.payload
        }
    }
}
)

export const {changeCategory} = categorySlice.actions
export default categorySlice.reducer