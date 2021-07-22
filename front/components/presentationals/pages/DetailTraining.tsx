import React, { FC } from 'react';
import { Header, Container, Form, Button, Item, } from 'semantic-ui-react';
import { Training } from '../../../services/models';

export interface DetailTrainingProps {
  category?: object,
  trainings?: Array<Training>,
  isLoggedIn?: boolean,
  userId?: number | string
};

export const DetailTraining: FC<DetailTrainingProps> = ({
  category = {},
  trainings = [],
  isLoggedIn = false,
  userId = ''
}) => (
  <div>
    <Header as='h2'>Training Detail</Header>
    <Header as='h3'>{ category.name }</Header>
    <Item.Group divided>
      {trainings.map((training, i) => (
        <Item key={i}>
          <Item.Content>
            {/* <Item.Image /> */}
            <Item.Header as='h4'>{ training.name }</Item.Header>
            <Item.Meta>
              <span className='cinema'>{ training.description }</span>
            </Item.Meta>
          </Item.Content>
        </Item>
      ))}
    </Item.Group>
  </div>
);
