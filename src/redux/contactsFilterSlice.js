import { createSlice } from '@reduxjs/toolkit';
// import { contactListSlice } from './contactsListSlice';

export const contactsFilterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact(state, action) {
      return (state = action.payload);
    },
  },
});

// export const filterReducerPersist = contactListSlice.reducer
// почему не работает?

export const { filterContact } = contactsFilterSlice.actions;

export const getFilter = state => state.filterRandom;
