import React, {FC} from 'react';
import { Header, Container } from 'semantic-ui-react';

export interface playProps {
  timer: string;
  circleDasharray: string;
  currentTrainingInfo: object;
}

export const Play: FC<playProps> = ({
  timer = '',
  circleDasharray = '',
  currentTrainingInfo = {},
}) => (
  <div>
    <Header as='h2'>Training</Header>
    <Header as='h3' textAlign='center'>Now: {currentTrainingInfo.currentMenu}</Header>
    <Container textAlign='center'>
      <p>{currentTrainingInfo.description}</p>
    </Container>
    <Header as='h3' textAlign='center'>Next: {currentTrainingInfo.nextMenu}</Header>
    {/* cf. https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ */}
    <div className="base-timer">
      <svg className="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g className="base-timer__circle">
          <circle className="base-timer__path-elapsed" cx="50" cy="50" r="45" />
        </g>
        <path
          id="base-timer-path-remaining"
          strokeDasharray={circleDasharray}
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
        {timer}
      </span>
    </div>
  </div>
);
