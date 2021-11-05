import i18next from 'i18next';
import React from 'react';

import SelectOption from '~components/SelectOption';

export const mapOptions = (options, target) =>
  options.map(option => ({
    label: <SelectOption message={i18next.t(`${target}:${option}`)} />,
    value: option
  }));

export const getSelectLabel = label =>
  label
    ? [
        {
          label: <div className="select-label">{label}</div>,
          value: 'label',
          isDisabled: true
        }
      ]
    : [];
