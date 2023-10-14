import { LoadMore } from './Button.styled';

export const Button = ({ nextPage }) => {
  return (
    <LoadMore type="button" onClick={nextPage}>
      Button
    </LoadMore>
  );
};
