import {appReducer, AppInitialStateType, toggleLoadingApp} from "../m2-bll/appReducer";

let startState: AppInitialStateType;

beforeEach(() => {
  startState = {
    isLoading: false,
  }

})
test('correct toggle loading should be set', () => {
  const endState = appReducer(startState, toggleLoadingApp({isLoading: false}))
  expect(endState.isLoading).toBe(false);
});
