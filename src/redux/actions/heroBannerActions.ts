// Define your action types
const UPDATE_HERO_BANNER_CONTENT = 'UPDATE_HERO_BANNER_CONTENT';

// Define your action creators
export const updateHeroBannerContent = (content: any) => ({
  type: UPDATE_HERO_BANNER_CONTENT,
  payload: content,
});
