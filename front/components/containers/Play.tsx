import React, { FC } from "react";
import { useParams } from "react-router";
import { Play } from "../presentationals/pages/Play";

export const PlayContainer: FC = () => {
  const params = useParams();
  console.log(params);
  // todo: 
  // URLパラメータからカテゴリIDを取得し、APIを叩いてトレーニング一覧を取得
  // トレーニング時間,休憩時間,トレーニング一覧を元にプレイリストの配列を生成
  // タイマー機能
  // トレニーニングが終わったら何かメッセージ出す
  
  return (
    <Play />
  );
};
