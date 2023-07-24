import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

// Define a type for the slice state
interface CarState {
  allCarData: CarDataType[] | [];
}

// Define the initial state using that type
const initialState = {
  allCarData: [],
} as CarState

export const carSlice = createSlice({
  name: 'cars',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllCarData : (state, action : PayloadAction<CarDataType[]>) => {
      state.allCarData = action.payload
    },
    clearAllCarData : (state) => {
      state.allCarData = [];
    },
    setFavorite : (state, action : PayloadAction<string>) => {
      const currentCarDetail = state.allCarData.find(car => car.id === action.payload);
      if (!currentCarDetail) return;
      currentCarDetail.isFavorite = true;
    },
    removeFavorite : (state, action : PayloadAction<string>) => {
      const currentCarDetail = state.allCarData.find(car => car.id === action.payload);
      if (!currentCarDetail) return;
      currentCarDetail.isFavorite = false;
    }
  },
})

export const { setAllCarData, clearAllCarData, setFavorite, removeFavorite } = carSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCars = (state: RootState) => state.cars

export default carSlice.reducer