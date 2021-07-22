import React, {FC} from 'react';
import { Header, Container, Select, Form, Grid, Button } from 'semantic-ui-react';
import * as settings from '../../../constants/home';
import { selectCategoryItem } from '../../../services/models';

export interface homeProps {
  categories: Array<selectCategoryItem>;
  handleCateogryId: (categoryId: number) => void;
  handleTotalTrainingTime: (categoryId: number) => void;
  handlePerTrainingTime: (categoryId: number) => void;
  handlePerBreakTime: (categoryId: number) => void;
}

export const Home: FC<homeProps> = ({
  categories = [],
  handleCateogryId = () => {},
  handleTotalTrainingTime = () => {},
  handlePerTrainingTime = () => {},
  handlePerBreakTime = () => {},
}) => (
  <div>
    <Header as='h2'>Random Training Playlis</Header>
    <Container>
      <Form>
        <Form.Field>
          <label>Category</label>
          <Select placeholder='Select' options={categories} onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleCateogryId(data.value)} />
        </Form.Field>
        <Form.Field>
          <label>Total Training Time (minutes)</label>
          <Select placeholder='Select' options={settings.totalTrainingTime} onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTotalTrainingTime(data.value)} />
        </Form.Field>
        <Form.Field>
          <label>Per Training/Break Time (seconds)</label>
          <Grid columns={2}>
            <Grid.Column>
              <label>Training</label>{' '}
              <Select placeholder='Select' options={settings.trainingTime} onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handlePerTrainingTime(data.value)} />
            </Grid.Column>
            <Grid.Column>
              <label>Break</label>{' '}
              <Select placeholder='Select' options={settings.breakTime} onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handlePerBreakTime(data.value)} />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Button content='Training Start!' primary />
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
