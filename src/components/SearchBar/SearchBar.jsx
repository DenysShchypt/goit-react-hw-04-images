import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { BsSearch } from 'react-icons/bs';
import {
  FormSearch,
  FormSearchFormButton,
  FormSearchInput,
  SearchbarHeader,
} from './SearchBar.styled';

const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .min(1, 'Too Short!')
    .max(20, 'Too Long!')
    .required('Required'),
});

export const SearchBar = ({ searchRequest }) => {
  return (
    <SearchbarHeader>
      <Formik
        initialValues={{
          search: '',
        }}
        validationSchema={SearchSchema}
        onSubmit={(value, actions) => {
          searchRequest(value);
          actions.resetForm();
        }}
      >
        <FormSearch>
          <FormSearchFormButton type="submit">
            <BsSearch size={26} />
          </FormSearchFormButton>

          <FormSearchInput
            className="input"
            type="text"
            autoComplete="off"
            name="search"
            autoFocus
            placeholder="Search images and photos"
          />
          <ErrorMessage name="name" component="div" />
        </FormSearch>
      </Formik>
    </SearchbarHeader>
  );
};
