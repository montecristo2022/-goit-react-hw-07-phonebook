import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addOneContact, deleteOneContact } from './operations';

const handlePending = state => {
  console.log('это пендинг');
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const contactListSlice = createSlice({
  name: 'ListOfContacts',
  initialState: {
    myContacts: [],
    // { id: '1', name: 'Alfredo Gaspacho', number: '285-34-99999' },
    // { id: '2', name: 'Alfredo Bagmeto', number: '777777' }
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.myContacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
 
  [addOneContact.pending]: handlePending,
  [addOneContact.fulfilled](state, action) {
    console.log('это фулфилд');
    state.isLoading = false;
    state.error = null;
    state.myContacts.push(action.payload);
  },
  [addOneContact.rejected]: handleRejected,
  [deleteOneContact.pending]: handlePending,
  [deleteOneContact.fulfilled](state, action) {
    state.isLoading = false;
    state.error = null;
    const index = state.myContacts.findIndex(
      task => task.id === action.payload.id
    );
    state.myContacts.splice(index, 1);
  },
  [deleteOneContact.rejected]: handleRejected,
},
});

export const contactReducer = contactListSlice.reducer;

export const getContacts = state => state.myListOfContacts;
