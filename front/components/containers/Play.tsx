import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Play } from "../presentationals/pages/Play";
import { getTrainingListforTimer } from '../../services/trainings';
import { TrainingMenuItem } from "../../services/models";

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
  const [currentTrainingInfo, setCurrentTrainingInfo] = useState({});

  const TOTAL_TRAINING_TIME = Number(params.totalTrainingTime);
  const TRAINING_TIME = Number(params.trainingTime); // todo
  const BREAK_TIME = Number(params.breakTime);
  const FULL_DASH_ARRAY = 283;

  const sleepTime = (ms: number) => new Promise(res => setTimeout(res, ms));

  const getTrainingInfo = async () => {
    const response = await getTrainingListforTimer(
      params.categoryId,
      TOTAL_TRAINING_TIME,
      TRAINING_TIME,
      BREAK_TIME,
    );

    // 未登録のカテゴリIDがきたらホーム画面に移動
    if(response.category.length === 0) {
      history.push('/');
      return;
    }

    await playAllTrainings(response.trainings);
  }

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const stringSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${stringSeconds}`;
  }
  
  const setCircleDasharrayOnTimer = (timeLeft: number, trainingTime: number) => {
    setCircleDasharray(`${(
      timeLeft / trainingTime * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`);
  }

  const startTimer = (trainingTime: number) => {
    let timerInterval = null;
    let timePassed = 0;
    let timeLeft = trainingTime;

    timerInterval = setInterval(() => {
      timePassed += 1;
      timeLeft = trainingTime - timePassed;
      setTimer(formatTime(timeLeft));
      setCircleDasharrayOnTimer(timeLeft, trainingTime);
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
        setCircleDasharrayOnTimer(trainingTime, trainingTime);
      }
    }, 1000);
  }

  const playAllTrainings = async (trainingMenuList: Array<TrainingMenuItem>) => {
    // trainingMenuListをmapで回すとうまくいかず
    for (let i = 0; i < trainingMenuList.length; i++) {
      setCurrentTrainingInfo({
        currentMenu: trainingMenuList[i].currentMenu,
        description: trainingMenuList[i].description,
        nextMenu: trainingMenuList[i + 1] ? trainingMenuList[i + 1].currentMenu : '',
      });
      startTimer(trainingMenuList[i].time);
      await sleepTime((trainingMenuList[i].time + 1) * 1000);
    }

    // トレーニング後のメッセージ
    setTimer('FINISH!');
  }

  useEffect(() => {
    getTrainingInfo();
  }, []);

  
 
  return (
    <Play 
      timer={timer}
      circleDasharray={circleDasharray}
      currentTrainingInfo={currentTrainingInfo}
    />
  );
};
