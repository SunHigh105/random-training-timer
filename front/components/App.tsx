import React, { FC } from 'react';
import { Menu, Container } from 'semantic-ui-react';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import { HomeContainer } from './containers/HomeContainer';
import { PlayContainer } from './containers/PlayContainer';
import { MyPage } from './presentationals/pages/MyPage';
import { SigninContainer } from '../components/containers/Signin';
import { Signup } from './presentationals/pages/Signup';
import { RegistVideoPlaylistContaniner } from './containers/RegistVideoPlaylist';
import { DetailVideoPlaylistContaniner } from './containers/DetailVideoPlaylistContainer';

export interface AppProps {
  user?: { user_id: string, name: string },
  isLoggedIn?: boolean,
  handleLogout?: () => void;
}

export const App: FC<AppProps> = ({
  user = { user_id: '', name: '' },
  isLoggedIn = false,
  handleLogout = () => {},
}) => {
  return (
    <div>
      <Menu 
        as={Menu}
      >
        <Menu.Item header as={Link} to='/'>Random Training</Menu.Item>
        { isLoggedIn ?
          (
            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/regist/video_playlist'>Regist</Menu.Item>
              <Menu.Item as={Link} to='/mypage'>MyPage</Menu.Item>
              <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
            </Menu.Menu>
          )
          :
          (
            <Menu.Menu position='right'>
              <Menu.Item as={Link} to='/signin'>Signin</Menu.Item>
              <Menu.Item as={Link} to='/signup'>Signup</Menu.Item>
            </Menu.Menu>
          )
        }
      </Menu>
      <Container text style={{ marginTop: '2em' }}>
        <Switch>
          <Route path='/' exact component={HomeContainer} />
          <Route path='/play/:categoryId' component={PlayContainer} />
          <Route path='/regist/video_playlist'>
            {!isLoggedIn ? <Redirect to="/signin" /> : <RegistVideoPlaylistContaniner userId={user.user_id} />}
          </Route>
          <Route path='/detail/video_playlist/:playlistId'>
            <DetailVideoPlaylistContaniner isLoggedIn={isLoggedIn} userId={user.user_id} />
          </Route>
          <Route path='/mypage'>
            {!isLoggedIn ? <Redirect to="/signin" /> : <MyPage />}
          </Route>
          <Route path='/signin'>
            {isLoggedIn ? <Redirect to="/" /> : <SigninContainer />}
          </Route>
          <Route path='/signup'>
            {isLoggedIn ? <Redirect to="/" /> : <Signup />}
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      </Container>
    </div>
  )
};

export default App;
