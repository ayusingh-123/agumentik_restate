// redux/reducers/heroBannerReducer.ts
interface HeroBannerState {
  content: {
    title: string;
    subtitle: string;
  };
}

const initialState: HeroBannerState = {
  content: {
    title: '',
    subtitle: '',
  },
};

const heroBannerReducer = (state = initialState, action: any): HeroBannerState => {
  switch (action.type) {
    case 'UPDATE_HERO_BANNER_CONTENT':
      return { ...state, content: action.payload };
    default:
      return state;
  }
};

export default heroBannerReducer;
