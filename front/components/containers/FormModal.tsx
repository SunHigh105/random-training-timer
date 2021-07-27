import React, { FC, useState } from "react";
import { useHistory } from "react-router";

import { FormModal } from "../presentationals/parts/FormModal";
import { trainingInfoItems } from '../../constants/home';
import { TrainingInfo } from "../../services/models";

export interface FormModalContainerProps {
  categoryId: number;
  categoryName: string;
  trainings: string;
}

export const FormModalContainer: FC<FormModalContainerProps> = ({
  categoryId,
  categoryName = '',
  trainings = '',
}) => {
  const [trainingInfo, setTrainingInfo] = useState<Partial<TrainingInfo>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  let history = useHistory();
  
  const handleTrainingInfo = (key: string, value: number) => {
    setTrainingInfo(info => ({ ...info, [key]: value }));
  }

  const handlePlay = () => {
    let isError = false;
    trainingInfoItems.map(item => {
      if (!(item in trainingInfo)) {
        isError = true;
      }
    });

    if (isError) {
      alert('Please select all items');
      return;
    }

    history.push(`/play/category/${categoryId}/total/${trainingInfo.totalTrainingTime}/per_time/${trainingInfo.trainingTime}/per_break/${trainingInfo.breakTime}`);
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <FormModal
      categoryName={categoryName}
      trainings={trainings}
      handleTrainingInfo={handleTrainingInfo}
      handlePlay={handlePlay}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen} 
    />
  )
};
