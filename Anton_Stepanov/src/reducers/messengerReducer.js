import { handleActions } from "redux-actions";
import { createChat, setChatId } from "../actions/chatActions";
import { loadMessenger, sendMessage, botMessage } from "../actions/messageActions";
import update  from "react-addons-update";

const defaultState = { chatId: 1, chats: {}, messages: {}, botMessage: {}, };

export default handleActions({
    [loadMessenger]: (state, { payload }) => {
        return {
            chatId: 1,
            chats: {
                1: {
                    name: "First chat",
                    messages: [1],
                },
                2: {
                    name: "Second chat",
                    messages: [2],
                },
                3: {
                    name: "New chat",
                    messages: [3],
                }
            },
            messages: {
                1: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                2: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
                3: { name: "Robot", content: "Привет путник, приветствую тебя в нашем чате!" },
            },
            botMessage: {},
        }
    },
    [createChat]: (state, { payload: { name } }) => {
        const chatId = Object.keys(state.chats).length + 1;
        return update(state, {chats: {$merge: {[chatId]: {name: name, messages: []}}}});
    },
    [setChatId]: (state, { payload: { chatId } }) => {
        return update(state, {$merge: {chatId: chatId}});
    },
    [sendMessage]: (state, { payload: { chatId, message } }) => {
        const messageId = Object.keys(state.messages).length + 1;
        return update(state, {
            messages: {$merge: {[messageId]: message}},
            chats: {[chatId]: {messages: {$push: [messageId]}}}
        });
    },
    [botMessage]: (state, { payload: { chatId, status } }) => {
        return update(state, {botMessage: {$merge: {chatId: chatId, status: status}}});
    }
}, defaultState);