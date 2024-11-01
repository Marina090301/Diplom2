import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Post as IPost} from '../../api/endpoints/blog';

interface PostsState {
  posts: IPost[],
  favoritesPosts: IPost[],
  currentPost: IPost | null,
  isShowModal: boolean,
}

const initialState: PostsState = {
  posts: [],
  favoritesPosts: [],
  currentPost: null,
  isShowModal: false,
};

export const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    loadPosts: (state, action: PayloadAction<IPost[]>) => {
      state.posts = action.payload
      state.favoritesPosts = action.payload.filter(post => post.isFavorite);
    },
    doLike: (state, action: PayloadAction<number>) => {
      const postIndex = state.posts.findIndex(({ id }) => id === action.payload)
      const newPosts = [...state.posts];
      const newPost = { ...newPosts[postIndex] };
      
      newPost.like += 1;
      newPosts[postIndex] = newPost;

      return {
        ...state,
        posts: newPosts
      }
    },
    doDislike: (state, action: PayloadAction<number>) => {
      const postIndex = state.posts.findIndex(({ id }) => id === action.payload)
      const newPosts = [...state.posts];
      const newPost = { ...newPosts[postIndex] };
      
      newPost.dislike += 1;
      newPosts[postIndex] = newPost;

      return {
        ...state,
        posts: newPosts,
       
      }
    },
    updateBookmark: (state, action: PayloadAction<number>) => {
      const postIndex = state.posts.findIndex(({ id }) => id === action.payload)
      const newPosts = [...state.posts];
      const newPost = { ...newPosts[postIndex] };
      
      newPost.isFavorite = !newPost.isFavorite
      newPosts[postIndex] = newPost;

      return {
        ...state,
        posts: newPosts,
        favoritesPosts: newPosts.filter(post => post.isFavorite)
      }
    },
    showCurrentPost: (state, action: PayloadAction<IPost>) => {
      return ({
        ...state,
        isShowModal: true,
        currentPost: action.payload
      })
    }, 
    showModal: (state) => {
      state.isShowModal = true
    },
    hideModal: (state) => {
      state.isShowModal = false
    },
    toggleModal: (state) => {
      state.isShowModal = !state.isShowModal
    }
  }
})

// Action creators are generated for each case reducer function
export const { loadPosts, doLike, doDislike,updateBookmark, showModal, hideModal, showCurrentPost, toggleModal } = postsSlice.actions

export default postsSlice.reducer