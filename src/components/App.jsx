import React, { Component } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { SearchBar } from './SearchBar/SearchBar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';
import { fetchArticlesWithQuery } from './Api';
import { ErrorMessage } from './ErrorMessage';
import { Layout } from './Layout';

export class App extends Component {
  state = {
    gallery: [],
    page: 1,
    isLoading: false,
    error: false,
    request: '',
  };

  searchRequest = addRequest => {
    this.setState({
      gallery: [],
      page: 1,
      request: addRequest.search,
    });
  };

  nextPage = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    if (
      this.state.request !== prevState.request ||
      this.state.page !== prevState.page
    ) {
      try {
        this.setState({ isLoading: true, error: false });
        const nextPhoto = await fetchArticlesWithQuery(
          `${this.state.request}`,
          this.state.page
        );
        if (nextPhoto.length < 1) {
          toast('Nothing was found for this request', {
            duration: 6000,
          });
        } else {
          toast.success('Successful request');
        }

        this.setState(prev => ({ gallery: [...prev.gallery, ...nextPhoto] }));
      } catch (error) {
        this.setState({ error: true });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  render() {
    const { error, isLoading, gallery, request } = this.state;
    return (
      <Layout>
        <SearchBar searchRequest={this.searchRequest} />
        {isLoading && <Loader />}
        {gallery.length > 0 && (
          <ImageGallery results={this.state.gallery} request={request} />
        )}
        {error && (
          <ErrorMessage>
            Whoops, something went wrong! Please reload this page!!!
          </ErrorMessage>
        )}

        {gallery.length >= 12 && <Button nextPage={this.nextPage} />}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}

export default App;
