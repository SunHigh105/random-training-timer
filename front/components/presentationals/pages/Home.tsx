import React from 'react';
import { Header, Container, Select, Form, Grid, Button } from 'semantic-ui-react';
import * as settings from '../../../constants/home';

export const Home = () => (
  <div>
    <Header as='h2'>Random Training Playlis</Header>
    <Container>
      <Form>
        <Form.Field>
          <label>Category</label>
          <Select placeholder='Select' options={[{key: '1', value: '有酸素', text: '有酸素'}]} />
        </Form.Field>
        <Form.Field>
          <label>Total Training Time (minutes)</label>
          <Select placeholder='Select' options={settings.totalTrainingTime} />
        </Form.Field>
        <Form.Field>
          <label>Per Training/Break Time (seconds)</label>
          <Grid columns={2}>
            <Grid.Column>
              <label>Training</label>{' '}
              <Select placeholder='Select' options={settings.trainingTime} />
            </Grid.Column>
            <Grid.Column>
              <label>Break</label>{' '}
              <Select placeholder='Select' options={settings.breakTime} />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Button content='Training Start!' primary />
        </Form.Field>
      </Form>
    </Container>
  </div>
);
