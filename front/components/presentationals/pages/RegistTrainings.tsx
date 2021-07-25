import React, { FC, MouseEvent } from 'react';
import { Header, Container, Form, Button, } from 'semantic-ui-react';

export interface RegistTrainingsProps {
  trainingCount?: number
  handleAddButtonClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  handleRegist?: (e: React.SyntheticEvent) => void;
}

export const RegistTrainings: FC<RegistTrainingsProps> = ({
  trainingCount = 1,
  handleAddButtonClick = () => {},
  handleRegist = () => {},
}) => (
  <div>
    <Header as='h2'>Regist Trainings</Header>
    <Container className="p-regist-trainings">
      <Form onSubmit={(e: React.SyntheticEvent) => handleRegist(e)}>
        <Form.Field>
          <label>Category Name</label>
          <input type="text" name="category_name" />
        </Form.Field>
        {/* todo: 公開設定 */}
        {/* <Form.Field>          
          <label>Public</label>
          <div className="ui toggle checkbox">
            <input type="checkbox" name="catgory_is_public" value="true" />
            <label></label>
          </div>
        </Form.Field> */}
        <Form.Field>
          <label>Trainings</label>
          {[...Array(trainingCount)].map((el, i) => (
            <div key={i} className="two fields">
              <label>{ i + 1 }</label>
              <div className="field">
                <input type="text" name={`training_name_${i + 1}`} placeholder="Name"/>
              </div>
              <div className="field">
                <input type="text" name={`training_description_${i + 1}`} placeholder="Description"/>
              </div>
              {/* todo: 不要なトレーニング消すボタン */}
              {/* <span>×</span> */}
            </div>
          ))}
        </Form.Field>
        <Form.Field>
          <Button type="button" onClick={(e: React.MouseEvent<HTMLButtonElement>) => handleAddButtonClick(e)}>Add Training</Button>
          <Button style={{ marginTop: '1em' }} type='submit' primary>Regist</Button>
        </Form.Field>
      </Form>
    </Container>
  </div>
);
