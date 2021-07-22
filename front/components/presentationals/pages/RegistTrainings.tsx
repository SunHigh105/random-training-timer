import React, { FC, FormEvent } from 'react';
import { Header, Container, Form, Button, } from 'semantic-ui-react';
// import { Trainings } from '../../../services/models';

export interface RegistTrainingsProps {
  handleCategory?: (targetName: string, newValue: string | boolean) => void;
  handleTrainingNames?: (num: number, newValue: string) => void;
  handleTrainingDescriptions?: (num: number, newValue: string) => void;
  handleRegist?: (event: FormEvent<HTMLFormElement>) => void;
  // playlist?: Trainings,
  // userId?: number,
}

export const RegistTrainings: FC<RegistTrainingsProps> = ({
  handleCategory = () => {},
  handleTrainingNames = () => {},
  handleTrainingDescriptions = () => {},
  handleRegist = () => {},
  // playlist = { name: '', is_public: true },
  // userId = ''
}) => (
  <div>
    <Header as='h2'>Regist Trainings</Header>
    <Container>
      <Form onSubmit={handleRegist}>
        <Form.Field>
          <label>Category Name</label>
          <input
            type="text"
            name="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCategory('name', String(e.target.value))}
          />
          {/* <input type="hidden" value={userId} /> */}
        </Form.Field>
        <Form.Field>          
          <label>Public</label>
          <div className="ui toggle checkbox">
            <input type="checkbox" name="is_public" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleCategory('is_public', e.target.checked)} />
            <label></label>
          </div>
        </Form.Field>
        <Form.Field>
          <label>Trainings</label>
          {[...Array(5)].map((el, i) => (
            <div key={i} className="two fields">
              <label>{ i + 1 }</label>
              <div className="field">
                <input type="text" name="training_title" placeholder="Name" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTrainingNames(i + 1, String(e.target.value))} />
              </div>
              <div className="field">
                <input type="text" name="training_url" placeholder="Description" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleTrainingDescriptions(i + 1, String(e.target.value))} />
              </div>
            </div>
          ))}
          <Button>Add</Button>
        </Form.Field>
        <Form.Field>
          <Button style={{ marginTop: '1em' }} type='submit' primary>Regist</Button>
        </Form.Field>
      </Form>
    </Container>
  </div>
);
