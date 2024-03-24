import { render } from 'react-dom';
import App from './App/App';
import { BrowserRouter } from 'react-router-dom';
import { store } from './shared/store/index';
import { Provider } from 'react-redux';

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);
