import React, {FC} from 'react';
import { Header, Container, Card } from 'semantic-ui-react';

import { SelectCategoryItem } from '../../../services/models';
import { FormModalContainer } from '../../containers/FormModal';

export interface homeProps {
  categories: Array<SelectCategoryItem>;
}

export const Home: FC<homeProps> = ({
  categories = [],
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
              <FormModalContainer
                categoryId={category.id}
                categoryName={category.name}
                trainings={category.trainings}
              />
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </Container>
  </div>
);
