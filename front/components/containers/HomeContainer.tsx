import React, { FC } from "react";
import { Home } from "../presentationals/pages/Home";

export const HomeContainer: FC =() => {
  // todo: 
  // ・フォームからカテゴリID,トレーニング時間,休憩時間を取得
  // ・ボタン押下のタイミングで上記の取得した値をstateに格納？
  // ・/play/:categoryIdにURLを切り替え(or遷移)

  return (
    <Home />
  );
};
