import { createSlice } from "@reduxjs/toolkit";

export const cardsSlice = createSlice({
    name: 'cards',
    initialState: {
        cards: {

        }
    },
    reducers: {
        addCard: (state, action) => {
            state.cards[action.payload.cardId] = {
                cardId: action.payload.cardId,
                front: action.payload.front,
                back: action.payload.back,
            }
        }
    }
});

export const selectCards = (state) => state.cards.cards;

export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;