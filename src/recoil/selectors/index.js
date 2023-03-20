import { selector, selectorFamily } from "recoil";
import { getPostById, getPosts } from "../../apis/post"

export const allPostsState = selector({
    key: 'allPostsState',
    get: async () => {
        try {
            const response = await getPosts()
            return response || []
        } catch (error) {
            console.error(`allPostsState -> getPosts() ERROR: \n${error}`);
            return [];
        }
    }
})

export const postQuery = selectorFamily({
    key: 'postState',
    get: postId => async () => {
        try {
            const response = await getPostById(postId)
            return response
        } catch (error) {
            console.error(`postState -> getPostById() ERROR: \n${error}`);
        }
    }
})