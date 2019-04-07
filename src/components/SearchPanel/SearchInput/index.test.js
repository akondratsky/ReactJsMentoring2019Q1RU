import React from 'react';
import { SearchInput, SearchInputContainer } from './index';

describe('<SearchInput />', () => {
  it('should be rendered correctly', () => {
    const input = shallow(
        <SearchInput />
    );
    expect(input).toMatchSnapshot();
  });

  it('with container rendered correctly', () => {
    const input = shallow(
        <SearchInputContainer />
    );
    expect(input).toMatchSnapshot();
  });

  it('calls setSearchType onTypeChange', () => {
    const setSearchTypeMockFn = jest.fn();
    const wrapper = mount(
        <SearchInput setSearchType={setSearchTypeMockFn} />
    );

    expect( wrapper.find('[value="genre"]').hasClass('button-inactive') ).toBeTruthy();
    wrapper.find('[value="genre"]').simulate('click');

    expect(setSearchTypeMockFn).toHaveBeenCalled();
    expect(setSearchTypeMockFn).toHaveBeenCalledWith('genre');
  });

  it('calls setSearchValue on input', () => {
    const setSearchValue = jest.fn();
    const wrapper = mount(
        <SearchInput setSearchValue={setSearchValue} />
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
    const wrapper = mount(
        <SearchInput
          fetchData={fetchData}
          search={searchStrStub}
          searchBy={searcyByStrStub} />
    );

    wrapper.find('input[value="Search"]').simulate('click');
    expect(fetchData).toHaveBeenCalled();
    expect(fetchData).toHaveBeenCalledWith({
      search: searchStrStub,
      searchBy: searcyByStrStub,
    });
  });
});
