import { configureStore } from '@reduxjs/toolkit'
import modalReducer  from './react-redux/reducers/modal'
import editorReducer  from './react-redux/reducers/editor'


export const store = configureStore({
  reducer: {
    modal : modalReducer,
    editor : editorReducer
  },
})