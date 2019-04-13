import React from 'react';
import { Provider } from 'react-redux';
import { SearchResultsContainer, SearchResults } from './index';
import configureStore from 'redux-mock-store';
import { ACTION, FILM_FIELD_NAMES, STRINGS } from 'Common/constants';
import { setSortingBy } from 'Actions/filter';

describe('<SearchResultsContainer />', () => {
  it('should render properly', () => {
    const wrapper = shallow(
        <SearchResultsContainer />
    );
    expect(wrapper).toMatchSnapshot();
  });


  it('should render active element correctly', () => {
    let wrapper = mount(
        <SearchResults sortBy='rating' />
    );

    expect(wrapper.find('[text="rating"]').prop('isActive')).toBeTruthy();
    expect(wrapper.find('[text="release date"]').prop('isActive')).toBeFalsy();

    wrapper = mount(
        <SearchResults sortBy='release date' />
    );

    expect(wrapper.find('[text="rating"]').prop('isActive')).toBeFalsy();
    expect(wrapper.find('[text="release date"]').prop('isActive')).toBeTruthy();
  });


  it('should call setSortingBy from props on type change', () => {
    const setSortingByMockFn = jest.fn();

    const wrapper = mount(
        <SearchResults setSortingBy={setSortingByMockFn} sortBy='release date' />
    );

    wrapper.find('[text="release date"]').simulate('click');
    expect(wrapper.find('[text="release date"]').prop('isActive')).toBeTruthy();
    expect(wrapper.find('[text="rating"]').prop('isActive')).toBeFalsy();

    expect(setSortingByMockFn).toBeCalled();
    expect(setSortingByMockFn).toBeCalledWith('release date');
  });
});


describe('<SearchResultsContainer />', () => {
  const mockStore = configureStore();

  const defaultStore = {
    films: {
      total: 13,
    },
    sortBy: 'rating',
  };

  it('container should be connected (smart) component', () => {
    const store = mockStore(defaultStore);
    const wrapper = mount(
        <Provider store={store}>
          <SearchResultsContainer />
        </Provider>
    );
    expect(wrapper.length).toEqual(1);
  });

  describe('returns correct props', () => {
    it('...for sorting rating', () => {
      const store = mockStore(defaultStore);
      const wrapper = mount(
          <Provider store={store}>
            <SearchResultsContainer />
          </Provider>
      );

      expect(wrapper.find(SearchResults).prop('sortBy')).toEqual(defaultStore.sortBy);
    });


    it('...for total films found', () => {
      const store = mockStore(defaultStore);
      const wrapper = mount(
          <Provider store={store}>
            <SearchResultsContainer />
          </Provider>
      );

      expect(wrapper.find(SearchResults).prop('totalFilms')).toEqual(defaultStore.films.total);
      expect(wrapper.find('.search-results__found').text())
          .toEqual(`${defaultStore.films.total} movies found`);
    });


    it('...for sorting by release date', () => {
      const store = mockStore({
        films: { records: [], total: 12 },
        sortBy: FILM_FIELD_NAMES.RELEASE_DATE,
      });
      const wrapper = mount(
          <Provider store={store}>
            <SearchResultsContainer />
          </Provider>
      );
      expect(wrapper.find(SearchResults).prop('sortBy')).toEqual(STRINGS.RELEASE_DATE);
    });
  });

  describe('calling actions on dispatching', () => {
    it('calling correct actions', () => {
      const store = mockStore(defaultStore);
      mount(
          <Provider store={store}>
            <SearchResultsContainer />
          </Provider>
      );

      store.dispatch(setSortingBy(FILM_FIELD_NAMES.RELEASE_DATE));
      store.dispatch(setSortingBy(FILM_FIELD_NAMES.RATING));
      const actions = store.getActions();
      expect(actions[0].type).toBe(ACTION.SORTING_BY_SETTED);
      expect(actions[0].typeName).toBe(FILM_FIELD_NAMES.RELEASE_DATE);
      expect(actions[1].type).toBe(ACTION.SORTING_BY_SETTED);
      expect(actions[1].typeName).toBe(FILM_FIELD_NAMES.RATING);
    });


    it('calling correct actions from dispatchers in props', () => {
      const store = mockStore(defaultStore);
      const wrapper = mount(
          <Provider store={store}>
            <SearchResultsContainer />
          </Provider>
      );

      wrapper.find(`[text="${STRINGS.RATING}"]`).simulate('click');
      wrapper.find(`[text="${STRINGS.RELEASE_DATE}"]`).simulate('click');
      const actions = store.getActions();
      expect(actions.length).toEqual(2);
      expect(actions[0].type).toBe(ACTION.SORTING_BY_SETTED);
      expect(actions[1].type).toBe(ACTION.SORTING_BY_SETTED);
      expect(actions[0].typeName).toBe(FILM_FIELD_NAMES.RATING);
      expect(actions[1].typeName).toBe(FILM_FIELD_NAMES.RELEASE_DATE);
    });
  });
});
