import { PropTypes } from 'prop-types';
import {FilterSection, Label, Input} from './Filter.modul'

export const Filter = ({ value, onChengeFilter }) => {
  console.log(onChengeFilter);
  return (
    <FilterSection>
      <Label>Filter</Label>
      <Input type="text" value={value} onChange={onChengeFilter} />
    </FilterSection>
  );
};

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};
