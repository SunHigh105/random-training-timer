import { ApiConfig, createAxiosInstance } from "./common";
import { Category, Training } from './models';

const succeededResponse = { isSucceeded: true };
const failedResponse = { isSucceeded: false };

export const registCategory = async (category?: Category) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_category', category);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};

export const registTrainings = async (trainings?: Array<Training>) => {
  const instance = createAxiosInstance();

  try {
    const res = await instance.post('/api/regist_trainings', trainings);
    return succeededResponse;
  } catch (e) {
    return failedResponse;
  }
};

export const getCategoryAndTrainings = async (categoryId?: string, optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);
  try {
    const res = await instance.get(`/api/get_category_and_trainings/${categoryId}`);
    return res.data;

  } catch (e) {
    return failedResponse;
  }
};

export const getAllCategories = async (optionConfig?: ApiConfig) => {
  const instance = createAxiosInstance(optionConfig);
  try {
    const res = await instance.get('/api/get_all_categories');
    return res.data;

  } catch (e) {
    return failedResponse;
  }
};

/**
 * タイマーに渡すトレーニングリスト(シャッフルして休憩時間も加えたもの)を取得
 */
export const getTrainingListforTimer = async (
  categoryId?: string,
  totalTrainingTime?: number,
  trainingTime?: number,
  breakTime?: number,
  optionConfig?: ApiConfig
) => {
  const instance = createAxiosInstance(optionConfig);
  try {
    const res = await instance.post(
      '/api/get_training_list_for_timer',
      {
        category_id: categoryId,
        total_training_time: totalTrainingTime,
        training_time: trainingTime,
        break_time: breakTime
      }
    );
    return res.data;

  } catch (e) {
    return failedResponse;
  }
};
