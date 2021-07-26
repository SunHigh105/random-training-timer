import React, { FC, useEffect, useState } from "react";
import { Home } from "../presentationals/pages/Home";

import { getAllCategories } from "../../services/trainings";
import { Category, SelectCategoryItem, TrainingInfo } from "../../services/models";
import { trainingInfoItems } from '../../constants/home';
import { useHistory } from "react-router";

export const HomeContainer: FC = () => {
  const [categories, setCategories] = useState<Array<SelectCategoryItem>>([]);
  const [trainingInfo, setTrainingInfo] = useState<Partial<TrainingInfo>>({});
  const [isModalOpen, setIsModalOpen] = useState(false);
  let history = useHistory();

  const getAllCategoriesInfo = async () => {
    const response = await getAllCategories();
    response.map((item: Category) => {
      setCategories((prevValue: Array<SelectCategoryItem>) => (
        [
          ...prevValue,
          {
            key: item.id,
            value: item.id,
            text: item.name,
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
