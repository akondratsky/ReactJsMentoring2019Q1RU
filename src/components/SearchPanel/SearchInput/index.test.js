import React from 'react';
import { SearchInput, SearchInputContainer, SearchInputWithoutRouter } from './index';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { ACTION } from 'Common/constants';
import thunk from 'redux-thunk';
// import { MemoryRouter, Route } from 'react-router-dom';

const defaultRoutingProps = {
  match: { params: {}},
  history: {
    push: jest.fn(),
  },
};


describe('<SearchInput />', () => {
  it('should be rendered correctly', () => {
    const input = shallow(
        <SearchInput {...defaultRoutingProps} />
    );
    expect(input).toMatchSnapshot();
  });


  it('calls setSearchType onTypeChange', () => {
    const setSearchTypeMockFn = jest.fn();
    const wrapper = mount(
        <SearchInput {...defaultRoutingProps} setSearchType={setSearchTypeMockFn} />
    );

    expect( wrapper.find('[value="genre"]').hasClass('button-inactive') ).toBeTruthy();
    wrapper.find('[value="genre"]').simulate('click');

    expect(setSearchTypeMockFn).toHaveBeenCalled();
    expect(setSearchTypeMockFn).toHaveBeenCalledWith('genres');
  });


  it('calls setSearchValue on input', () => {
    const setSearchValue = jest.fn();
    const wrapper = mount(
        <SearchInput {...defaultRoutingProps} setSearchValue={setSearchValue} />
    );
    const input = wrapper.find('input[type="text"]');

    expect(input).toExist();

    input.simulate('input', {
      target: {
        value: 'My new value',
      },
    });

    expect(setSearchValue).toHaveBeenCalled();
    expect(setSearchValue).toHaveBeenCalledWith('My new value');
  });


  it('calls fetchData with arguments when submit button clicked', () => {
    const fetchData = jest.fn();
    const searchStrStub = 'searchStrStub';
    const searcyByStrStub = 'searcyByStrStub';
    const routingPropsStub = {
      match: {
        params: { searchString: searchStrStub },
      },
      history: {
        push: jest.fn(),
      },
    };
    const wrapper = mount(
        <SearchInput
          {...routingPropsStub}
          fetchData={fetchData}
          searchBy={searcyByStrStub} />
    );

    wrapper.find('input[value="Search"]').simulate('click');
    expect(fetchData).toHaveBeenCalled();
    expect(fetchData).toHaveBeenCalledWith({
      searchBy: searcyByStrStub,
      sortBy: undefined,
      sortOrder: 'asc',
    });
  });
});


describe('<SearchInputContainer />', () => {
  const mockStore = configureStore([thunk]);
  const defaultStore = {
    search: 'my search string',
    searchBy: 'title',
    sortBy: 'rating',
  };

  let store;
  let wrapper;

  beforeEach(() => {
    store = mockStore(defaultStore);
    wrapper = mount(
        <Provider store={store}>
          <SearchInputWithoutRouter {...defaultRoutingProps} />
        </Provider>
    );
  });

  it('rendered correctly', () => {
    const input = shallow(
        <SearchInputContainer />
    );
    expect(input).toMatchSnapshot();
  });

  it('returns correct props', () => {
    expect(wrapper.find(SearchInput).prop('search')).toEqual(defaultStore.search);
    expect(wrapper.find(SearchInput).prop('searchBy')).toEqual(defaultStore.searchBy);
    expect(wrapper.find(SearchInput).prop('sortBy')).toEqual(defaultStore.sortBy);
  });


  describe('calling necessary dispatchers on actions', () => {
    it('calling setSearchType on search type change', () => {
      wrapper.find('[text="title"]').simulate('click');
      const actions = store.getActions();
      expect(actions.length).toEqual(1);
      expect(actions[0].type).toBe(ACTION.FILTER_TYPE_SETTED);
      expect(actions[0].name).toBe('title');
    });

    it('calling setSearchString on input', () => {
      wrapper.find('input[type="text"]').simulate('input', {
        target: {
          value: 'My new value',
        },
      });
      const actions = store.getActions();
      expect(actions.length).toEqual(1);
      expect(actions[0].type).toBe(ACTION.FILTER_SETTED);
      expect(actions[0].value).toBe('My new value');
    });

    it('calling filmsFetchData on submit button click', () => {
      const fetchMockFn = jest.fn();
      fetchMockFn.mockReturnValue(new Promise(() => ({
        ok: true,
        response: [],
      })));

      global.fetch = fetchMockFn;

      wrapper.find('[text="title"]').simulate('click');
      wrapper.find('input[type="text"]').simulate('input', {
        target: {
          value: 'filmname',
        },
      });
      wrapper.find('input[value="Search"][type="button"]').simulate('click');

      const actions = store.getActions();
      expect(actions.length).toEqual(4);
      expect(actions[3].type).toEqual(ACTION.FILMS_IS_LOADING);
      expect(actions[3].isLoading).toBe(true);
    });
  });
});
