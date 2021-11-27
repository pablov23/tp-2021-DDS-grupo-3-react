import Input from '~app/components/Input';

export const mapCharacteristics = characteristics => {
  const neededCharacteristics = [];
  characteristics.forEach(characteristic =>
    neededCharacteristics.push({
      field: Input,
      name: characteristic
    })
  );
  return neededCharacteristics;
};
