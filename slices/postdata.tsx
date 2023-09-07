import { createSlice } from "@reduxjs/toolkit";

let postID = 0;

interface PersonData {
  profilePic: string;
  userID: string;
  postLink: string;
  likes: number;
  isliked: boolean;
  caption: string;
  comments: string[];
  postID: number;
}

const viewerData = {
  id: "",
  name: "",
};

const initialState: PersonData[] = [
  {
    profilePic:
      "https://yt3.ggpht.com/ytc/AAUvwnjBGV2TTTvmiz8eMaDJicjn6RlwmMeGIwbo6KNpcg=s900-c-k-c0x00ffffff-no-rj",
    userID: "Beerbiceps",
    postLink:
      "https://m.media-amazon.com/images/M/MV5BNWJlMzY5ZjctZGYzZi00NDFiLWIyOWEtYTVjNzg4OTViMzY2XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_FMjpg_UX1000_.jpg",
    likes: 6947,
    isliked: false,
    caption: "Reality is Harsh",
    comments: ["Hello world", "I'm steelman"],
    postID: postID++,
  },
  {
    profilePic:
      "ttps://img.mensxp.com/media/content/2020/Sep/Image-1-Facebook-CarryMinati_5f621859f1b73.jpeg?w=500&h=625",
    userID: "Beerbiceps",
    postLink:
      "https://m.media-amazon.com/images/M/MV5BNWJlMzY5ZjctZGYzZi00NDFiLWIyOWEtYTVjNzg4OTViMzY2XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_FMjpg_UX1000_.jpg",
    likes: 6947,
    isliked: false,
    caption: "Reality is Harsh",
    comments: ["Hello world", "I'm steelman"],
    postID: postID++,
  },
  {
    profilePic:
      "https://yt3.ggpht.com/ytc/AAUvwnjBGV2TTTvmiz8eMaDJicjn6RlwmMeGIwbo6KNpcg=s900-c-k-c0x00ffffff-no-rj",
    userID: "Beerbiceps",
    postLink:
      "https://m.media-amazon.com/images/M/MV5BNWJlMzY5ZjctZGYzZi00NDFiLWIyOWEtYTVjNzg4OTViMzY2XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_FMjpg_UX1000_.jpg",
    likes: 6947,
    isliked: false,
    caption: "Reality is Harsh",
    comments: ["Hello world", "I'm steelman"],
    postID: postID++,
  },
];

export const postDataSlice = createSlice({
  name: "postData",
  initialState,
  reducers: {
    likePost: (state, action) => {
      let icon = document.querySelector(".like-post-" + action.payload);
      icon?.classList.add("active");

      if (state[action.payload].isliked) {
      } else {
        state[action.payload].isliked = true;
        ++state[action.payload].likes;
      }

      setTimeout(() => {
        icon?.classList.remove("active");
      }, 700);
    },
    handleLike: (state, action) => {    
      if (state[action.payload].isliked) {
        state[action.payload].isliked = false;
        state[action.payload].likes--;
      } else {
        state[action.payload].isliked = true;
        state[action.payload].likes++;
      }
    },
    postComment: (state, action) => {
      const [comment, id] = action.payload;

      if (comment === "") return;
      state[id].comments.push(viewerData.id, comment);
    },
    sharePost: (state, action) => {
        const [caption, src] = action.payload;

        let newPostData:PersonData ={
            profilePic:"https://energies2050.org/wp-content/uploads/2017/01/beweship-contact-placeholder.jpg",
            userID: viewerData.id,
            caption,
            postLink:src,
            likes: 0,
            isliked: false,
            comments: [],
            postID:state.length
        };
        state.push(newPostData);
    },
    handleLogin: (state, action) => {
        viewerData.id += action.payload[0];
        viewerData.name += action.payload[1];
    },
  },
});

export const {
    likePost,
    handleLike,
    postComment,
    sharePost,
    handleLogin
} = postDataSlice.actions;

export default postDataSlice.reducer;
