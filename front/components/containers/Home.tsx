import React, { FC, useEffect, useState } from "react";
import { Home } from "../presentationals/pages/Home";

import { getAllCategories } from "../../services/trainings";
import { AllCategoriesInfo, SelectCategoryItem, TrainingInfo } from "../../services/models";
import { trainingInfoItems } from '../../constants/home';
import { useHistory } from "react-router";

export const HomeContainer: FC = () => {
  const [categories, setCategories] = useState<Array<SelectCategoryItem>>([]);
  const [trainingInfo, setTrainingInfo] = useState<Partial<TrainingInfo>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  let history = useHistory();

  

  const getAllCategoriesInfo = async () => {
    const response = await getAllCategories();
    console.log(response);
    response.map((item: AllCategoriesInfo) => {
      setCategories((prevValue: Array<SelectCategoryItem>) => (
        [
          ...prevValue,
          {
            id: item.category.id,
            name: item.category.name,
            userName: item.userName[0].name,
            trainings: item.trainings[0].name,
          }
        ]
      ));
    });
  }

  const handleTrainingInfo = (key: string, value: number) => {
    setTrainingInfo(info => ({ ...info, [key]: value }));
  }

  useEffect(() => {
    getAllCategoriesInfo();
  }, []);

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
  
    history.push(`/play/category/${trainingInfo.categoryId}/total/${trainingInfo.totalTrainingTime}/per_time/${trainingInfo.trainingTime}/per_break/${trainingInfo.breakTime}`);
  };

  const handleModalOpen = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (
    <Home
      categories={categories}
      handleTrainingInfo={handleTrainingInfo}
      handlePlay={handlePlay}
      isModalOpen={isModalOpen}
      handleModalOpen={handleModalOpen}
    />
  );
};
