import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import {FoodPage} from '../../../pages/FoodPage';
import {Cart} from '../../../pages/CartPage';
import {FoodItemPage} from '../../../pages/FoodItemPage';
import {ErrorPage} from '../../../pages/ErrorPage';

export default function AppRouter() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<FoodPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/foodItem/:id" element={<FoodItemPage />} />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}
