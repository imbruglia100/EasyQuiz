import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from "../topics/topicSlice";

export const quizzesSlice = createSlice({
    name: "quizzes",
    initialState: {
        quizzes: {}
    },
    reducers:{
        addQuiz: (state, action) => {
            const { quizId, name, topicId, cardIds } = action.payload;
            state.quizzes[quizId] = {
                id: quizId,
                name: name,
                topicId: topicId,
                cardIds: cardIds
            };
        }
    }

})

export const createNewQuiz = ({ quizId, name, topicId, cardIds}) => {
    return (dispatch) => {
        dispatch(addQuiz({
            name: name,
            topicId: topicId,
            cardIds: cardIds,
            quizId: quizId
        }));
        dispatch(addQuizId({
            topicId: topicId,
            quizId: quizId
        }));
    }
}

export const selectQuizzes = (state) => state.quizzes.quizzes;

export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;