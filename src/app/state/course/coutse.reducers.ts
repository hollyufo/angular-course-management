import { createReducer, on } from "@ngrx/store";
import { getCourses, getCoursesFailed, getCoursesSuccess } from "./course.actions";

export interface CourseState {
  courses: [];
  error: any
}
export const initialState: CourseState = {
  courses: [],
  error: ""
}
export const courseReducer = createReducerucer(
  initialState,
  on(getCourses,(state, action)=>{
    return {
      ...state,
      courses: [],
    }
  }),
  on(getCoursesSuccess,(state, action)=>{
    return {
      ...state,
      courses: action.coursesList,
    }
  }),
  on(getCoursesError,(state, action)=>{
    return {
      ...state,
      eror: action.error,
    }
  }),
);
