import {createActions} from "redux-actions";

export const {createChat, setChatId} = createActions({
   "CREATE_CHAT": (name) => ({name}),
   "SET_CHAT_ID": (chatId) => ({chatId}),
})