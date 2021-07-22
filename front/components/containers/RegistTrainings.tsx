import React, { useState, useEffect, FC, FormEvent } from 'react';
import { RegistTrainings } from '../presentationals/pages/RegistTrainings';
import { registCategory, registTrainings } from '../../services/trainings';

export interface registcategoryContainerProps {
  userId:? number | string
}

export const RegistTrainingsContaniner: FC<registcategoryContainerProps> = ({
  userId = '',
}) => {
  const [category, setCategory] = useState({ name: '', user_id: userId, is_public: true });
  const [trainingNames, setTrainingNames] = useState({});
  const [trainingDescriptions, setTrainingDescriptions] = useState({});

  const handleCategory = (
    targetName: string,
    newValue: string | boolean,
  ) => {
    if (newValue !== '') {
      setCategory(v => ({ ...v, [targetName]: newValue }));
    }
  };

  const handleTrainingNames = (
    num: number,
    newValue: string
  ) => {
    if (newValue !== '') {
      setTrainingNames(v => ({ ...v, [num]: newValue }));
    }
  };

  const handleTrainingDescriptions = (
    num: number,
    newValue: string
  ) => {
    if (newValue !== '') {
      setTrainingDescriptions(v => ({ ...v, [num]: newValue }));
    }
  };
  
  const handleRegist = async (e: FormEvent<HTMLFormElement>) => {
    // category Nameのバリデーション
    if (category.name === '') {
      alert('Please input category name');
      return;
    }

    // trainingNamesとtrainingDescriptionsを合体
    const trainings = [];
    let isError = false;
    Object.keys(trainingNames).map(num => {
      const description = trainingDescriptions.[num] ? trainingDescriptions.[num] : '';
      // if (!trainingDescriptions.[num]) {
      //   isError = true;
      //   return;
      // }
      trainings.push({ name: trainingNames.[num], description: description })
    });

    // todo: Video URLsのフォーム制御を加え、バリデーションをちゃんとする
    if(Object.keys(trainingNames).length === 0) {
      isError = true;
    }

    // 動画URLのバリデーション
    if (isError) {
      alert('Please input training name');
      return;
    }
    
    const categoryResponse = await registCategory(category);
    const TrainingsResponse = await registTrainings(trainings);

    // 登録成功時
    if (categoryResponse.isSucceeded && TrainingsResponse.isSucceeded) {
      alert('Trainings registration succeeded!');
      // todo: detail/training/{id} にリダイレクト
      return;
    }

    // 登録失敗時
    alert('Trainings registration failed.');
    return;
  };
  
  return (
    <RegistTrainings
      handleCategory={handleCategory}
      handleRegist={handleRegist}
      handleTrainingNames={handleTrainingNames}
      handleTrainingDescriptions={handleTrainingDescriptions}
    />
  );
}