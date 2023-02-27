import { COLORCHANGED, STATUSCHANGED } from "./actiontypes";
import { initialState } from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUSCHANGED:
      return {
        ...state,
        status: action.paylaod,
      };

    case COLORCHANGED:
      const { color, changeType } = action.paylaod;
      switch (changeType) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "remove":
          return {
            ...state,
            colors: state.colors.filter((colorUp) => colorUp !== color),
          };
        default:
          return state;
      }
    default:
      return state;
  }
};

export default reducer;
