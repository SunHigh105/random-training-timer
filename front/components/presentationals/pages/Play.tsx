import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export const Play = () => (
  <div>
    <Header as='h2'>Training</Header>
    <Header as='h3' textAlign='center'>Now: スクワット</Header>
    <Container textAlign='center'>
      <p>お尻をちゃんと落とす 膝が爪先より前に出ないように！</p>
    </Container>
    <Header as='h3' textAlign='center'>Next: 休憩</Header>
    {/* cf. https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ */}
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
        <path
          id="base-timer-path-remaining"
          strokeDasharray="283"
          className="base-timer__path-remaining"
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </svg>
      <span id="base-timer-label" className="base-timer__label">
        {/* Remaining time label */}
        0:30
      </span>
    </div>
  </div>
);
