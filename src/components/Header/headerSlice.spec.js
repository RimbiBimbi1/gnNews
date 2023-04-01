import headerReducer, { switchListView } from "./headerSlice";

describe("header reducer", () => {
  const initialState = {
    tileOrStripeView: false,
  };

  it("should handle initial state", () => {
    //given
    const state = undefined;
    const action = { type: "unknown" };
    //when
    const actualState = headerReducer(state, action);

    //then
    expect(actualState).toEqual(initialState);
  });

  it("should handle switchListView", () => {
    //given
    const state = { tileOrStripeView: false };
    const action = { type: switchListView };
    //when
    const actualState = headerReducer(state, action);

    //then
    expect(actualState).toEqual({ tileOrStripeView: true });
  });
});
