import { ApiConfig, createAxiosInstance } from "./common";
import { VideoPlaylist, Video } from './models';

const succeededResponse = { isSucceeded: true };
const failedResponse = { isSucceeded: false };

export const registVideoPlaylist = async (playlist?: VideoPlaylist) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_video_playlist', playlist);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};

export const registVideos = async (videos?: Array<Video>) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_videos', videos);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};

const getVideoPlaylist = async (playlistId?: string) => {
  const instance = createAxiosInstance();
  try {
    const res = await instance.get(`/api/get_video_playlist/${playlistId}`);
    return res.data;

  } catch (e) {
    return failedResponse;
  }
};

// export const getVideoPlaylistFactory = () => {
//   const instance = createAxiosInstance();
//   const getVideoPlaylist = async (playlistId?: string) => {
//     try {
//       const res = await instance.get(`/api/get_video_playlist/${playlistId}`);
//       return res.data;
  
//     } catch (e) {
//       return failedResponse;
//     }
//   };

//   return getVideoPlaylist;
// }
