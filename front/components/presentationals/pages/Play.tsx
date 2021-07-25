import React, {FC} from 'react';
import { Header, Container } from 'semantic-ui-react';

import { PlayProps } from '../../../services/models';

export const Play: FC<PlayProps> = ({
  timer = '',
  circleDasharray = '',
  currentTrainingInfo = {},
  remainingTrainingCount = 0,
}) => (
  <div className='p-play'>
    <Header as='h2'>Training</Header>
    <h3 className='p-play__menu'>{currentTrainingInfo.currentMenu}</h3>
    <Container className='p-play__description' textAlign='center'>
      <p>{currentTrainingInfo.description}</p>
    </Container>
    <h3 className='p-play__menu p-play__menu--next'>{currentTrainingInfo.nextMenu}</h3>
    {/* cf. https://css-tricks.com/how-to-create-an-animated-countdown-timer-with-html-css-and-javascript/ */}
    <div className="c-base-timer">
      <svg className="c-base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g>
          <circle cx="50" cy="50" r="45" />
        </g>
        <path
          id="training_ring"
          aria-hidden="true"
          strokeDasharray={circleDasharray}
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
        <path
          id="break_ring"
          aria-hidden="false"
          strokeDasharray={circleDasharray}
          d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
        ></path>
      </svg>
      <span id="c-base-timer-label" className="c-base-timer__label">
        {/* Remaining time label */}
        {timer}
      </span>
    </div>
    <Container className='p-play__remaining-count' textAlign='center'>
      <p>{remainingTrainingCount}</p>
    </Container>
  </div>
);
