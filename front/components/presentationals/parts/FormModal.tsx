import React, { FC } from 'react';
import { Modal, Form, Select, Grid, Button } from 'semantic-ui-react';

import * as settings from '../../../constants/home';

export interface FormModalProps {
  categoryName: string;
  trainings: string;
  handleTrainingInfo: (key: string, value: number) => void;
  handlePlay: () => void;
  isModalOpen: boolean;
  handleModalOpen: () => void;
}

export const FormModal:FC<FormModalProps> = ({
  categoryName = '',
  trainings = '',
  handleTrainingInfo = () => {},
  handlePlay = () => {},
  isModalOpen =  false,
  handleModalOpen = () => {},
}) => (
  <Modal
    onClose={handleModalOpen}
    onOpen={handleModalOpen}
    open={isModalOpen}
    trigger={<Button>Setting</Button>}
  >
  <Modal.Header>Training Setting: {categoryName}</Modal.Header>
    <Modal.Content>Menu: {trainings}</Modal.Content>
    <Modal.Content>
      <Form onSubmit={handlePlay}>
        <Form.Field>
          <label>Total Training Time (minutes)</label>
          <Select
            placeholder='Select'
            options={settings.totalTrainingTime}
            onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[0], data.value)}
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
                onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[1], data.value)}
              />
            </Grid.Column>
            <Grid.Column>
              <label>Break</label>{' '}
              <Select
                placeholder='Select'
                options={settings.breakTime}
                onChange={(e: React.SyntheticEvent<HTMLElement, Event>, data: any) => handleTrainingInfo(settings.trainingInfoItems[2], data.value)}
              />
            </Grid.Column>
          </Grid>
        </Form.Field>
        <Form.Field>
          <Button type='submit' content='Training Start!' primary />
          {/* todo: 全フォーム埋まったらボタンを活性化 */}
          {/* {isActive ? 
            <Button content='Training Start!' primary />
            :
            <Button content='Training Start!' primary disabled />
          } */}
        </Form.Field>
      </Form>
    </Modal.Content>
  </Modal>
);
