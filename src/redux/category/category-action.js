import { createAction } from '@reduxjs/toolkit';

const addNewCategoryRequest = createAction('category/addCategoryRequest');
const addNewCategorySuccess = createAction('category/addCategorySuccess');
const addNewCategoryError = createAction('category/addCategoryError');

const getCategoryRequest = createAction('category/getCategoryRequest');
const getCategorySuccess = createAction('category/getCategorySuccess');
const getCategoryError = createAction('category/getCategoryError');

const deleteCategoryRequest = createAction('category/deleteCategoryRequest');
const deleteCategorySuccess = createAction('category/deleteCategorySuccess');
const deleteCategoryError = createAction('category/deleteCategoryError');

export {
  addNewCategoryRequest,
  addNewCategorySuccess,
  addNewCategoryError,
  getCategoryRequest,
  getCategorySuccess,
  getCategoryError,
  deleteCategoryRequest,
  deleteCategorySuccess,
  deleteCategoryError,
};
