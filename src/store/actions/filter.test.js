import { ACTION } from 'Common/constants';
import { setSearchType, setSearchString, setSortingBy } from './filter';

describe('filter actions', () => {
  it('changing search type', () => {
    const typeName = 'title';
    const action = setSearchType(typeName);
    expect(action.type).toEqual(ACTION.FILTER_TYPE_SETTED);
    expect(action.name).toEqual(typeName);
  });

  it('changing search value', () => {
    const value = 'sadfsafd';
    const action = setSearchString(value);
    expect(action.type).toEqual(ACTION.FILTER_SETTED);
    expect(action.value).toEqual(value);
  });

  it('changing sorting type', () => {
    const typeName = 'extratype';
    const action = setSortingBy(typeName);
    expect(action.type).toEqual(ACTION.SORTING_BY_SETTED);
    expect(action.typeName).toEqual(typeName);
  });
});
