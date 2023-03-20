import { atom } from "recoil";
import { allPostsState } from "../selectors";

export const postListState = atom({
    key: 'postListState',
    default: allPostsState
})