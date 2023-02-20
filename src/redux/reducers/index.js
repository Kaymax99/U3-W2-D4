// import { ADD_TO_FAV, REMOVE_FROM_FAV } from "../actions";

// const initialState = {
//   favourites: {
//     content: [],
//   },
// };

// const mainReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_TO_FAV:
//       return {
//         ...state,
//         favourites: {
//           ...state.favourites,
//           content: [...state.favourites.content, action.payload],
//         },
//       };

//     case REMOVE_FROM_FAV:
//       return {
//         ...state,
//         favourites: {
//           ...state.favourites,
//           content: state.favourites.content.filter(
//             (_, i) => i !== action.payload
//           ),
//         },
//       };

//     default:
//       return state;
//   }
// };
// export default mainReducer;
