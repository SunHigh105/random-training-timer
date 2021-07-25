export interface User {
  email: string;
  password: string;
}

export interface Category {
  id: number;
  name: string;
  user_id: number;
  is_public: boolean;
}

export interface Training {
  name: string;
  category_id: number;
  description: string;
}

export interface TrainingInfo {
  categoryId: number;
  totalTrainingTime: number;
  trainingTime: number;
  breakTime: number;
}

export interface SelectCategoryItem {
  key: number;
  value: number;
  text: string;
};

export interface TrainingMenuItem {
  currentMenu: string;
  description: string;
  time: number;
}

export interface PlayParams {
  categoryId: string;
  totalTrainingTime: string;
  trainingTime: string;
  breakTime: string;
}

export interface PlayProps {
  timer: string;
  circleDasharray: string;
  currentTrainingInfo: Partial<CurrentTrainingInfoItem>;
  remainingTrainingCount: string;
}

export interface CurrentTrainingInfoItem {
  currentMenu: string | undefined;
  description: string;
  nextMenu: string;
}
