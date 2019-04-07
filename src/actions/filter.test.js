import { ACTION } from 'Common/constants';
import { setSearchType, setSearchString } from './filter';

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
});
