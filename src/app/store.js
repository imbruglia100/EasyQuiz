import { configureStore } from "@reduxjs/toolkit";
import topicsReducer from '../features/topics/topicSlice.js';
import quizReducer from '../features/quizzes/quizSlice';
import cardsReducer from '../features/cards/cardSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizReducer,
    cards: cardsReducer
  },
});
