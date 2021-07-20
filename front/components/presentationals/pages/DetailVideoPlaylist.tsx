import React, { FC } from 'react';
import { Header, Container, Form, Button, Item, } from 'semantic-ui-react';
import { Video } from '../../../services/models';

export interface DetailVideoPlaylistProps {
  playlist?: object,
  videos?: Array<Video>,
  isLoggedIn?: boolean,
  userId?: number | string
};

export const DetailVideoPlaylist: FC<DetailVideoPlaylistProps> = ({
  playlist = {},
  videos = [],
  isLoggedIn = false,
  userId = ''
}) => (
  <div>
    <Header as='h2'>Video Playlist Detail</Header>
    <Header as='h3'>{ playlist.name }</Header>
    <Item.Group divided>
      {videos.map((video, i) => (
        <Item key={i}>
          <Item.Content>
            {/* <Item.Image /> */}
            <Item.Header>{ video.name }</Item.Header>
            <Item.Meta>
              <span className='cinema'>{ video.createdAt }</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </div>
);
