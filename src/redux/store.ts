// redux/store.ts
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import heroBannerReducer from './reducers/heroBannerReducer';

const rootReducer = combineReducers({
  heroBanner: heroBannerReducer,
  // Add other reducers here if you have more in your Redux store
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: rootReducer,
});

export default store;
