import { handleActions, createAction } from 'redux-actions';

const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export const increment = createAction(INCREMENT);
export const decrement = createAction(DECREMENT);

export default handleActions(
	{
		[INCREMENT]: (state, action) => state + 1,
		[DECREMENT]: (state, action) => state - 1
	},
	0
);
