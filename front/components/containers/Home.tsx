import React, { FC, useEffect, useState } from "react";
import { Home } from "../presentationals/pages/Home";

import { getAllCategories } from "../../services/trainings";
import { Category, selectCategoryItem } from "../../services/models";

export const HomeContainer: FC = () => {
  // todo:
  // ・フォームからカテゴリID,トレーニング時間,休憩時間を取得
  // ・ボタン押下のタイミングで上記の取得した値をstateに格納？
  // ・/play/:categoryIdにURLを切り替え(or遷移)
  const [categories, setCategories] = useState([]);
  
  const getAllCategoriesInfo = async () => {
    const response = await getAllCategories();
    response.map((item: Category) => {
      setCategories((prevValue: Array<selectCategoryItem>) => ([
        ...prevValue,
        {
          key: item.id,
          value: item.id,
          text: item.name,
        }
      ]));
    });
  }

  const handleCategoryId = (categoryId: number) => {
    console.log(categoryId);
  };

  const handleTotalTrainingTime = (time: number) => {
    console.log(time);
  };

  const handlePerTrainingTime = (time: number) => {
    console.log(time);
  };

  const handlePerBreakTime = (time: number) => {
    console.log(time);
  };

  useEffect(() => {
    getAllCategoriesInfo();
  }, []);

  return (
    <Home
      categories={categories}
      handleCateogryId={handleCategoryId}
      handleTotalTrainingTime={handleTotalTrainingTime}
      handlePerTrainingTime={handlePerTrainingTime}
      handlePerBreakTime={handlePerBreakTime}
    />
  );
};
