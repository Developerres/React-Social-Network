import profileReducer, { addPostActionCreator } from "./profileReducer";

const state = {
  postData: [
    { id: 1, message: "Hi. How are you?", likesCount: 15 },
    { id: 2, message: "Hey. I'm fine. And you?", likesCount: 20 },
  ],
};

it("length of posts should be incremented", () => {
  // 1. Test data
  const action = addPostActionCreator("new post text");
  // 2. Action
  const newState = profileReducer(state, action);

  // 3.Expectation
  expect(newState.postData.length).toBe(3);
});

it("Post message should be 'new post text'", () => {
  // 1. Test data
  const action = addPostActionCreator("new post text");
  // 2. Action
  const newState = profileReducer(state, action);

  // 3.Expectation
  expect(newState.postData[2].message).toBe("new post text");
});
