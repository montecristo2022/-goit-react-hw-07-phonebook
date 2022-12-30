import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://63ad4e123e4651691655c8ae.mockapi.io/';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addOneContact = createAsyncThunk(
  'contacts/addContact',
  async (contactData, thunkAPI) => {
    try {
      const response = await axios.post('/contacts', { ...contactData });
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteOneContact = createAsyncThunk(
  'contacts/deleteContact',
  async (taskId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${taskId}`);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
