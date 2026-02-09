import { configureStore } from '@reduxjs/toolkit';
import { campsitesReducer } from '../features/campsites/CampsitesSlice';
import { commentsReducer } from '../features/comment/CommentsSlice';
import { partnersReducer } from '../features/partners/partnersSlice';
import { promotionsReducer} from '../app/promotrions/promotionsSlice';


export const store = configureStore({
    reducer: {
        campsites: campsitesReducer,
        comments: commentsReducer,
        partners: partnersReducer,
        promotions: promotionsReducer
    }
});

