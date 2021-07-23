import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Play, playProps } from "../presentationals/pages/Play";
import { getCategoryAndTrainings } from '../../services/trainings';

export interface playParams {
  categoryId: string;
  totalTrainingTime: string;
  trainingTime: string;
  breakTime: string;
}

export const PlayContainer: FC = () => {
  const params = useParams<playParams>();
  let history = useHistory();

  const [timer, setTimer] = useState('');
  const [circleDasharray, setCircleDasharray] = useState('');

  const TIME_LIMIT = Number(params.trainingTime);
  const FULL_DASH_ARRAY = 283;
  let timerInterval: number;
  let timePassed = 0;
  let timeLeft = TIME_LIMIT;

  const getTrainingInfo = async () => {
    const response = await getCategoryAndTrainings(params.categoryId);

    // 未登録のカテゴリIDがきたらホーム画面に移動
    if(response.category.length === 0) {
      history.push('/');
      return;
    }
    console.log(response);
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const stringSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${stringSeconds}`;
  }

  const calculateTimeFraction = () => {
    return timeLeft / TIME_LIMIT;
  }
  
  const setCircleDasharrayOnTimer = () => {
    setCircleDasharray(`${(
      calculateTimeFraction() * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`);
  }

  const startTimer = () => {
    timerInterval = setInterval(() => {
      timePassed += 1;
      timeLeft = TIME_LIMIT - timePassed;
      setTimer(formatTime(timeLeft));
      setCircleDasharrayOnTimer();
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  useEffect(() => {
    getTrainingInfo();
    startTimer();
  }, []);

  // トレーニング時間,休憩時間,トレーニング一覧を元にプレイリストの配列を生成
  // タイマー機能
  // トレニーニングが終わったら何かメッセージ出す
  
  return (
    <Play 
      timer={timer}
      circleDasharray={circleDasharray}
    />
  );
};
