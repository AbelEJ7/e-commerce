import {createSelector} from 'reselect';

const selectCategoryReducer= (state) => state.categories;

export const SelectCategories =createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice.categories
);


export const selectCategoriesMap = createSelector(
  [SelectCategories],
  (categories) => categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items
    console.log('cat fies')
    return acc;
  }, {}));
