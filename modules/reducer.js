import * as t from './constants';

let initialState = { exercises:[] };

const exerciseReducer = (state = initialState, action) => {
    switch (action.type) {
        case t.EXERCISES_AVAILABLE:{
            let { exercises } = action.data;

            return {...state, exercises};
        }

        case t.ADD_EXERCISE:{
           
            let { exercise } = action.data;
            let clone = JSON.parse(JSON.stringify(state.exercises));
            clone.push(exercise); 
            return {...state, exercises:clone};
        }

        case t.REMOVE_EXERCISE:{
            let { id } = action.data;

            let exercises = state.exercises;

           
            let clone = JSON.parse(JSON.stringify(exercises));

          
            const index = clone.findIndex((obj) => obj.id === id);

        
            if (index !== -1) clone.splice(index, 1);

            return {...state, exercises:clone};
        }

        default:
            return state;

    }
};

export default exerciseReducer;