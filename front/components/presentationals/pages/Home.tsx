import React, {FC} from 'react';
import { Header, Container, Select, Form, Grid, Button } from 'semantic-ui-react';

import * as settings from '../../../constants/home';
import { SelectCategoryItem } from '../../../services/models';

export interface homeProps {
  categories: Array<SelectCategoryItem>;
  handleTrainingInfo: (key: string, value: number) => void;
  handlePlay: () => void;
}

export const Home: FC<homeProps> = ({
  categories = [],
  handleTrainingInfo = () => {},
  handlePlay = () => {},
}) => (
  <div>
    <Header as='h2'>Random Training Playlis</Header>
    <Container>
      <Form onSubmit={handlePlay}>
        <Form.Field>
          <label>Category</label>
          <Select 
            placeholder='Select'
            options={categories}
            onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[0], data.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Total Training Time (minutes)</label>
          <Select
            placeholder='Select'
            options={settings.totalTrainingTime}
            onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[1], data.value)}
          />
        </Form.Field>
        <Form.Field>
          <label>Per Training/Break Time (seconds)</label>
          <Grid columns={2}>
            <Grid.Column>
              <label>Training</label>{' '}
              <Select
                placeholder='Select'
                options={settings.trainingTime}
                onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[2], data.value)}
              />
            </Grid.Column>
            <Grid.Column>
              <label>Break</label>{' '}
              <Select
                placeholder='Select'
                options={settings.breakTime}
                onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[3], data.value)}
              />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Button type='submit' content='Training Start!' primary />
          {/* {isActive ? 
            <Button content='Training Start!' primary />
            :
            <Button content='Training Start!' primary disabled />
          } */}
        </Form.Field>
      </Form>
    </Container>
  </div>
);
