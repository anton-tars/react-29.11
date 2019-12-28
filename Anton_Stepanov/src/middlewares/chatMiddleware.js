import { setChatId } from "../actions/chatActions";

export default store => next => (action) => {
    if (action.type === '@@router/LOCATION_CHANGE') {
        setTimeout(() => store.dispatch(
            setChatId(action.payload.location.pathname.match(/\d+/)[0])
        ), 10)
    }
    next(action);
}