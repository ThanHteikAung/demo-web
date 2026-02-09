import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/CampsitesSlice';
import { commentsReducer } from '../features/comment/CommentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../app/promotrions/promotionsSlice';
import logger from 'redux-logger';
import { userReducer } from '../features/user/userSlice';




export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer,
        user: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([logger])
});

