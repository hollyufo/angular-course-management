import { createAction, props } from '@ngrx/store';

export const getCourses = createAction('[Course] find all courses');

export const getCoursesSuccess = createAction(
  '[Course] find all courses success',
  props<{ coursesList: any[] }>()
);

export const getCoursesFailed = createAction(
  '[Course] find all courses Failed',
  props<{ error: String }>()
);
