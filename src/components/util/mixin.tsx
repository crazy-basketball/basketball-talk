type TRem = {
  value: number;
  standardValue?: number;
};

export const rem = ({ value, standardValue = 16 }: TRem) => {
  const remSize: number = value / standardValue;
  return remSize;
};
