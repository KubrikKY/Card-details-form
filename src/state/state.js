import { configureStore } from '@reduxjs/toolkit';
import { reducerCard } from './reducer/reducerCard';

const reducerRoot = {
  card: reducerCard,
};

export const store = configureStore({
  reducer: { ...reducerRoot },
});
