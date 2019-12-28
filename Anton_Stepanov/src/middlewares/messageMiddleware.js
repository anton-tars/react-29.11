import { sendMessage, botMessage } from "../actions/messageActions";

export default store => next => (action) => {
    switch (action.type) {
        case 'SEND_MESSAGE':
            if (action.payload.message.name !== 'Robot') {
                setTimeout(() => store.dispatch(
                    sendMessage(action.payload.chatId, {name: "Robot", content: "Hello, " + action.payload.message.name + ", how are you?"})
                ), 1000)
                setTimeout(() => store.dispatch(
                    botMessage(action.payload.chatId, 1)
                ), 1000)
            }
    }
    return next(action)
}
