import React, { useState, useEffect, FC, FormEvent } from 'react';
import { useParams } from 'react-router';
import { DetailVideoPlaylist } from '../presentationals/pages/DetailVideoPlaylist';
import { getVideoPlaylist } from '../../services/videos';

export interface DetailVideoPlaylistContainerProps {
  isLoggedIn?: boolean,
  userId?: number | string,
}

export const DetailVideoPlaylistContaniner: FC<DetailVideoPlaylistContainerProps> = async ({
  isLoggedIn = false,
  userId = '',
}) => {
  const params = useParams();
  const [playlist, setPlaylist] = useState({});
  const [videos, setVideos] = useState([]);
  
  const playlistInfo = await getVideoPlaylist(params.playlistId);
  console.log(playlistInfo);
  setPlaylist({ ...playlistInfo.playlist[0] });
  setVideos([ ...playlistInfo.videos ]);
  console.log(playlist);
  console.log(videos);

  return (
    <DetailVideoPlaylist 
      playlist={playlist}
      videos={videos}
      isLoggedIn={isLoggedIn}
      userId={userId}
    />
  );
};
