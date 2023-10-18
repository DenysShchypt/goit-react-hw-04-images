import { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchArticlesWithQuery } from './Api';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [request, setRequest] = useState('');

  const searchRequest = addRequest => {
    setGallery([]);
    setPage(1);
    setRequest(addRequest.search);
  };

  const nextPage = () => {
    setPage(prev => prev + 1);
  };

  useEffect(() => {
    if (request === '') {
      return;
    }
    async function fetchRequest() {
      try {
        setIsLoading(true);
        setError(false);
        const nextPhoto = await fetchArticlesWithQuery(`${request}`, page);
        if (nextPhoto.length < 1) {
          toast('Nothing was found for this request', {
            duration: 6000,
          });
        } else {
          toast.success('Successful request');
        }

        setGallery(prev => [...prev, ...nextPhoto]);
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchRequest();
  }, [request, page]);

  return (
    <Layout>
      <SearchBar searchRequest={searchRequest} />
      {isLoading && <Loader />}
      {gallery.length > 0 && (
        <ImageGallery results={gallery} request={request} />
      )}
      {error && (
        <ErrorMessage>
          Whoops, something went wrong! Please reload this page!!!
        </ErrorMessage>
      )}

      {gallery.length >= 12 && <Button nextPage={nextPage} />}
      <Toaster position="top-right" />
    </Layout>
  );
};

export default App;
