import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Play, playProps } from "../presentationals/pages/Play";
import { getCategoryAndTrainings } from '../../services/trainings';
import { Training } from "../../services/models";
import { ItemMeta } from "semantic-ui-react";

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

  const menuList = [];

  const TRAINING_TIME = Number(params.trainingTime); // todo
  const BREAK_TIME = Number(params.breakTime);
  const FULL_DASH_ARRAY = 283;

  const shuffleTrainingsSort = (trainings: Array<Training>) => {
    for (let i = trainings.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [trainings[i], trainings[j]] = [trainings[j], trainings[i]];
    }
    return trainings;
  };

  const sleepTime = (ms: number) => new Promise(res => setTimeout(res, ms));

  const getTrainingInfo = async () => {
    const response = await getCategoryAndTrainings(params.categoryId);

    // 未登録のカテゴリIDがきたらホーム画面に移動
    if(response.category.length === 0) {
      history.push('/');
      return;
    }
    // 休憩時間を含めたリストを作成
    shuffleTrainingsSort(response.trainings).map((item: Training, i: number) => {
      if (i === 0) {
        menuList.push({currentMenu: '開始前', description: '', time: 3});
      }
      menuList.push({currentMenu: item.name, description: item.description, time: TRAINING_TIME});
      if (i !== response.trainings.length - 1) {
        menuList.push({currentMenu: '休憩', description: '', time: BREAK_TIME});
      }
    });

    await playAllTrainings();
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
      }
    }, 1000);
  }

  const playAllTrainings = async () => {
    // menuListをmapで回すとうまくいかず
    for (let i = 0; i < menuList.length; i++) {
        setCurrentTrainingInfo({
          currentMenu: menuList[i].currentMenu,
          description: menuList[i].description,
          nextMenu: menuList[i + 1] ? menuList[i + 1].currentMenu : '',
        });
        startTimer(menuList[i].time);
        await sleepTime((menuList[i].time + 1) * 1000);
    }
  }

  useEffect(() => {
    getTrainingInfo();
  }, []);

  // トレニーニングが終わったら何かメッセージ出す
 
  return (
    <Play 
      timer={timer}
      circleDasharray={circleDasharray}
      currentTrainingInfo={currentTrainingInfo}
    />
  );
};
