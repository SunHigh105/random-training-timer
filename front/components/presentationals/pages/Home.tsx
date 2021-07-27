import React, {FC} from 'react';
import { Header, Container, Select, Form, Grid, Button, Card, Modal } from 'semantic-ui-react';

import { SelectCategoryItem, TrainingInfo } from '../../../services/models';
import * as settings from '../../../constants/home';


export interface homeProps {
  categories: Array<SelectCategoryItem>;
  trainingInfo: Partial<TrainingInfo>
  handleTrainingInfo: (key: string, value: number) => void;
  handlePlay: () => void;
  isModalOpen: boolean;
  handleModalOpen: () => void;
}

export const Home: FC<homeProps> = ({
  categories = [],
  trainingInfo = {},
  handleTrainingInfo = () => {},
  handlePlay = () => {},
  isModalOpen =  false,
  handleModalOpen = () => {},
}) => (
  <div>
    <Header as='h2'>Random Training Timer</Header>
    <Container>
      <Card.Group>
        {categories.map((category: SelectCategoryItem) => (
          <Card key={category.id}>
            <Card.Content className="c-training-card">
              <Card.Header>{category.name}</Card.Header>
              <Card.Meta>{category.userName}</Card.Meta>
              <Card.Description className="c-training-card__description">{category.trainings}</Card.Description>
            </Card.Content>
            <Card.Content>
              <Modal
                onClose={handleModalOpen}
                onOpen={handleModalOpen}
                open={isModalOpen}
                trigger={<Button onClick={() => handleTrainingInfo('categoryId', category.id)}>Setting</Button>}
              >
                <Modal.Header>Training Setting</Modal.Header>
                <Modal.Content>
                  <Form onSubmit={handlePlay}>
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
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  </div>
);
