import React, { FC, useEffect, useState } from "react";
import { Home } from "../presentationals/pages/Home";

import { getAllCategories } from "../../services/trainings";
import { AllCategoriesInfo, SelectCategoryItem } from "../../services/models";

export const HomeContainer: FC = () => {
  const [categories, setCategories] = useState<Array<SelectCategoryItem>>([]);

  const getAllCategoriesInfo = async () => {
    const response = await getAllCategories();
    response.map((item: AllCategoriesInfo) => {
      setCategories((prevValue: Array<SelectCategoryItem>) => (
        [
          ...prevValue,
          {
            id: item.category.id,
            name: item.category.name,
            userName: item.userName[0].name,
            trainings: item.trainings.join(', '),
          }
        ]
      ));
    });
  }

  useEffect(() => {
    getAllCategoriesInfo();
  }, []);

  return (
    <Home categories={categories} />
  );
};
