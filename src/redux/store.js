import { configureStore } from '@reduxjs/toolkit';
import { contactsFilterSlice } from './contactsFilterSlice';
import { contactReducer } from './contactsListSlice';



export const store = configureStore({
  reducer: {
    filterRandom: contactsFilterSlice.reducer,
    myListOfContacts: contactReducer,
  },
});














// import { configureStore } from '@reduxjs/toolkit';
// import { contactsFilterSlice } from './contactsFilterSlice';
// import { contactReducer } from './contactsListSlice';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

// const persistConfig = {
//   key: 'root',
//   storage,
// };

// const persistedReducer = persistReducer(persistConfig, contactReducer);

// export const store = configureStore({
//   reducer: {
//     filterRandom: contactsFilterSlice.reducer,
//     myListOfContacts: persistedReducer,
//   },
//   middleware(getDefaultMiddleware) {
//     return getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     });
//   },
// });

// export const persistor = persistStore(store);
