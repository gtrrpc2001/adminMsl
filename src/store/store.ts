import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { testSlice } from "./createSlices";

const rootReducer = combineReducers({
    test: testSlice.reducer
});

const persistConfig = {
    key: "root",
    storage,
    whitelist: ["id"], // 지속하고 싶은 상태의 key 목록
    // blacklist: [] // 지속하지 않을 상태의 key 목록도 설정
};

const getPersistReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: getPersistReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: ['persist/PERSIST']
        }
    })
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
export const persistor = persistStore(store);