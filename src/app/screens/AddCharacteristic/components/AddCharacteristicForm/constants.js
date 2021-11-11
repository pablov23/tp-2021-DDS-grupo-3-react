import Select from '~components/Select';
import Input from '~components/Input';
import { mapOptions } from '~utils/select';

import { FIELDS } from '../../constants';

export const FORM_TARGET = 'AddCharacteristicForm';

export const CHARACTERISTIC_TYPES = ['mock1', 'mock2', 'mock3'];

export const CHARACTERISTIC_FIELDS = [
  {
    field: Select,
    name: FIELDS.CHARACTERISTIC_TYPE,
    options: mapOptions(CHARACTERISTIC_TYPES, FORM_TARGET)
  },
  {
    field: Input,
    name: FIELDS.CHARACTERISTIC
  }
];
