import React, { useState, useEffect, FC, FormEvent } from 'react';
import { useParams } from 'react-router';
import { DetailVideoPlaylist } from '../presentationals/pages/DetailVideoPlaylist';
import { getVideoPlaylist } from '../../services/videos';

export interface DetailVideoPlaylistContainerProps {
  isLoggedIn?: boolean,
  userId?: number | string,
}

export const DetailVideoPlaylistContaniner: FC<DetailVideoPlaylistContainerProps> = ({
  isLoggedIn = false,
  userId = '',
}) => {
  const params = useParams();
  const [playlist, setPlaylist] = useState({});
  const [videos, setVideos] = useState([]);

  const getPlaylistInfo = async () => {
    const playlistInfo = await getVideoPlaylist(params.playlistId);
    setPlaylist({ ...playlistInfo.playlist[0] });
    setVideos([ ...playlistInfo.videos ]);
  }

  useEffect(() => {
    getPlaylistInfo();
  }, []);

  return (
    <DetailVideoPlaylist 
      playlist={playlist}
      videos={videos}
      isLoggedIn={isLoggedIn}
      userId={userId}
    />
  );
};
