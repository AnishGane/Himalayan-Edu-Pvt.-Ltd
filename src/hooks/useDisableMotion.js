import { useMediaQuery } from 'react-responsive';

export const useDisableMotion = () => {
  return useMediaQuery({ maxWidth: 768 }); // true if mobile
};
