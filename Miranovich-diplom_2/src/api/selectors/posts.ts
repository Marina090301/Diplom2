import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../../api/store';

export const postsSelector = (state: RootState) => state.posts.posts;

export const favoritesPostsSelector = (state: RootState) => state.posts.favoritesPosts;

export const postByIdSelector = (postId: number) => createSelector(
  [postsSelector],
  (posts) => posts.find(post => post.id === postId)
);

export const getPostCountLikeSelector = (postId: number) => createSelector(
  [postsSelector],
  (posts) => posts.find(post => post.id === postId)?.like ?? 0,
);