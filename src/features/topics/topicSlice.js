import { createSlice } from "@reduxjs/toolkit"

const topics = createSlice({
    initialState:{
        topics:{

        }
    },
    reducers: {
        addTopic: (state, action) => {
            return { topics: {
                ...state.topics,
                [action.payload.id]:{
                    id: action.payload.id,
                    name: action.payload.name,
                    icon: action.payload.icon
                }
            }}
        }
    }
});

export const addTopic = (state, {id, name, icon}) => {

}