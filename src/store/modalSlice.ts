import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '.'

// Define a type for the slice state
interface ModalState {
  carModal: {modalOpen : boolean, modalContent : CarDataType | null};
}

// Define the initial state using that type
const initialState = {
  carModal : {modalOpen : false, modalContent : null},
} as ModalState

export const modalSlice = createSlice({
  name: 'modals',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: { 
    carModalOpen : (state, action : PayloadAction<CarDataType>) => {
      state.carModal.modalOpen = true
      state.carModal.modalContent = action.payload
    },
    carModalClose : (state) => {
      state.carModal.modalOpen = false
      state.carModal.modalContent = null
    }
  },
})

export const { carModalOpen, carModalClose } = modalSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectModals = (state: RootState) => state.modals;

export default modalSlice.reducer