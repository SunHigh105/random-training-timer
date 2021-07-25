import React, { FC, useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

import { Play } from "../presentationals/pages/Play";
import { getTrainingListforTimer } from '../../services/trainings';
import { PlayParams, CurrentTrainingInfoItem, TrainingMenuItem } from "../../services/models";

export const PlayContainer: FC = () => {
  const params = useParams<PlayParams>();
  let history = useHistory();

  const TOTAL_TRAINING_TIME = Number(params.totalTrainingTime);
  const TRAINING_TIME = Number(params.trainingTime);
  const BREAK_TIME = Number(params.breakTime);
  const FULL_DASH_ARRAY = 283;

  // 5(s) -> 0:15 の形式にフォーマット
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    const stringSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    return `${minutes}:${stringSeconds}`;
  }

  // 指定した時間(ms)スリープ
  const sleepTime = (ms: number) => new Promise(res => setTimeout(res, ms));

  const [timer, setTimer] = useState(formatTime(5));
  const [currentTrainingInfo, setCurrentTrainingInfo] = useState<Partial<CurrentTrainingInfoItem>>({});
  const [remainingTrainingCount, setRemainingTrainingCount] = useState('');
  const [trainingRingDasharray, setTrainingRingDashArray] = useState(String(FULL_DASH_ARRAY));
  const [breakRingDasharray, setBreakRingDashArray] = useState(String(FULL_DASH_ARRAY));

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

    await playAllTrainings(response.trainings, response.totalTrainingCount);
  }
  
  const setCircleDasharrayOnTimer = (timeLeft: number, trainingTime: number, isBreakTime: boolean) => {
    const dasharrayValue = `${(
      timeLeft / trainingTime * FULL_DASH_ARRAY
    ).toFixed(0)} ${FULL_DASH_ARRAY}`;
    if (isBreakTime) {
      setBreakRingDashArray(dasharrayValue);
    } else {
      setTrainingRingDashArray(dasharrayValue);
    }
  }

  const startTimer = (trainingTime: number, isBreakTime: boolean) => {
    let timePassed = 0;
    let timeLeft = trainingTime;

    let timerInterval = setInterval(() => {
      timePassed += 1;
      timeLeft = trainingTime - timePassed;
      setTimer(formatTime(timeLeft));
      setCircleDasharrayOnTimer(timeLeft, trainingTime, isBreakTime);
      
      if (timeLeft <= 0) {
        clearInterval(timerInterval);
      }
    }, 1000);
  }

  const playAllTrainings = async (
    trainingMenuList: Array<TrainingMenuItem>,
    totalTrainingCount: number,
  ) => {
    const trainingRing = document.getElementById('training_ring');
    const breakRing = document.getElementById('break_ring');
    let remainingCount = totalTrainingCount; // 残りのトレーニング数

    // trainingMenuListをmapで回すとうまくいかず
    for (let i = 0; i < trainingMenuList.length; i++) {
      let isBreakTime = i % 2 === 0;
      
      setCircleDasharrayOnTimer(1, 1, isBreakTime); // 表示前にタイマーをfillにする
      setTimer(formatTime(trainingMenuList[i].time)); // タイマー開始前に残り時間表示
      if (isBreakTime) {
        // 休憩開始直後に残りのトレーニング数を更新
        setRemainingTrainingCount(`${remainingCount} / ${totalTrainingCount}`);
        remainingCount -= 1;

        // 休憩用リングを表示
        trainingRing!.setAttribute('aria-hidden', 'true');
        breakRing!.setAttribute('aria-hidden', 'false');
      } else {
        // トレーニング用リングを表示
        trainingRing!.setAttribute('aria-hidden', 'false');
        breakRing!.setAttribute('aria-hidden', 'true');
      }
      
      // 現在のトレーニング情報を更新
      setCurrentTrainingInfo({
        currentMenu: `Now: ${trainingMenuList[i].currentMenu}`,
        description: trainingMenuList[i].description,
        nextMenu: trainingMenuList[i + 1] ? `Next: ${trainingMenuList[i + 1].currentMenu}` : '',
      });

      startTimer(trainingMenuList[i].time, isBreakTime);
      await sleepTime((trainingMenuList[i].time + 1) * 1000);
    }

    // トレーニング終了後の表示
    trainingRing!.setAttribute('aria-hidden', 'true');
    breakRing!.setAttribute('aria-hidden', 'true');
    setCurrentTrainingInfo({
      currentMenu: '',
      description: 'お疲れ様でした！',
      nextMenu: '',
    });
    setTimer('FINISH!');
    setRemainingTrainingCount(`0 / ${totalTrainingCount}`);
  }

  useEffect(() => {
    getTrainingInfo();
  }, []);

  return (
    <Play 
      timer={timer}
      trainingRingDasharray={trainingRingDasharray}
      breakRingDasharray={breakRingDasharray}
      currentTrainingInfo={currentTrainingInfo}
      remainingTrainingCount={remainingTrainingCount}
    />
  );
};
