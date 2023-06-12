import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filtered: '',
  },
  reducers: {
    addContactsAction(state, action) {
      state.contacts.push(action.payload);
    },
    deleteContactsAction(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
    },

    filterContactsAction(state, action) {
      state.filtered = action.payload;
    },
  },
});

export const contactsReducer = contactsSlice.reducer;

export const {
  addContactsAction,
  deleteContactsAction,
  filterContactsAction,
  changeFilterAction,
} = contactsSlice.actions;
