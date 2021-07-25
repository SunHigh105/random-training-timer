import React, { useState, useEffect, FC, FormEvent } from 'react';
import { useHistory, useParams } from 'react-router';
import { DetailTraining } from '../presentationals/pages/DetailTraining';
import { getCategoryAndTrainings } from '../../services/trainings';

export interface DetailTrainingContainerProps {
  isLoggedIn?: boolean,
  userId?: number | string,
}

export const DetailTrainingContaniner: FC<DetailTrainingContainerProps> = ({
  isLoggedIn = false,
  userId = '',
}) => {
  const params = useParams<{categoryId: string}>();
  const [category, setCategory] = useState({id: 0, name: ''});
  const [trainings, setTrainings] = useState<Array<{id: number; name: string; category_id: number; description: string;}>>([]);
  let history = useHistory();

  const getTrainingInfo = async () => {
    const trainingInfo = await getCategoryAndTrainings(params.categoryId);

    // 該当のカテゴリが存在しなければホームに移動
    if (trainingInfo.category.length === 0) {
      history.push('/');
      return;
    }

    setCategory({ ...trainingInfo.category[0] });
    setTrainings([ ...trainingInfo.trainings ]);
  }

  useEffect(() => {
    getTrainingInfo();
  }, []);

  return (
    <DetailTraining 
      category={category}
      trainings={trainings}
      isLoggedIn={isLoggedIn}
      userId={userId}
    />
  );
};
