import React, { useState, FC, MouseEvent } from 'react';
import { RegistTrainings } from '../presentationals/pages/RegistTrainings';
import { registCategory, registTrainings } from '../../services/trainings';

export interface registcategoryContainerProps {
  userId: number | string;
}

export const RegistTrainingsContaniner: FC<registcategoryContainerProps> = ({
  userId = '',
}) => {
  const [trainingCount, setTrainingCount] = useState(1);

  const handleAddButtonClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.persist();
    setTrainingCount(prev => prev + 1);
  }

  const handleRegist = async (e: React.SyntheticEvent) => {
    const formValues = e.target as Element;
    const getTargetValue = (name: string) => {
      return formValues.querySelector<HTMLInputElement>(`input[name="${name}"]`)!.value;
    };
    // 本当はArray.fromで書きたいが文法エラーとなる
    // No overload matches this call.
    // Overload 1 of 4, '(iterable: Iterable<unknown> | ArrayLike<unknown>): unknown[]', gave the following error.
    // Array.from(targetValues).map(el => {
    //   // console.log(`${el.name}: ${el.value}`);
    // });

    // Category Nameのバリデーション
    if (getTargetValue('category_name') === '') {
      alert('Please input category name');
      return;
    }

    // トレーニングのnameとdescriptionを合体
    let isError = false;
    const trainings: Array<{name: string, description: string}> = [];
    for (let i = 1; i <= trainingCount; i++ ) {
      const trainingName = getTargetValue(`training_name_${i}`);
      const trainingDescription = getTargetValue(`training_description_${i}`);
      trainings.push({
        name: trainingName,
        description: trainingDescription,
      });
      if (trainingName === '' || trainingDescription === '') {
        isError = true;
      }
    }

    if (isError) {
      alert('Please fill all inputs');
      return;
    }
    
    const categoryResponse = await registCategory({
      name: getTargetValue('category_name'),
      is_public: true,
      user_id: userId, 
    });
    const TrainingsResponse = await registTrainings(trainings);

    // 登録成功時
    if (categoryResponse.isSucceeded && TrainingsResponse.isSucceeded) {
      alert('Trainings registration succeeded!');
      // todo: detail/training/{id} にリダイレクト
      location.href = '/';
      return;
    }

    // 登録失敗時
    alert('Trainings registration failed.');
    return;
  };
  
  return (
    <RegistTrainings
      trainingCount={trainingCount}
      handleRegist={handleRegist}
      handleAddButtonClick={handleAddButtonClick}
    />
  );
}
