import {createActions} from "redux-actions";

export const {loadMessenger, sendMessage, botMessage} = createActions({
    "LOAD_MESSENGER": () => ({}),
    "SEND_MESSAGE": (chatId, message) => ({chatId, message}),
    "BOT_MESSAGE": (chatId, status) => ({chatId, status}),
})