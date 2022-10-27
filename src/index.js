import { StrictMode } from 'react';
import { render } from 'react-dom';
import App from 'components/app/app';
import { creteApi } from './api';
import { applyMiddleware, createStore } from 'redux';
import reducer from './redux/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const api = creteApi();

const store = createStore(
  reducer,
  composeWithDevTools(
      applyMiddleware(thunk.withExtraArgument(api))
  )
)

render(
  <Provider store={store}>
    <StrictMode>
      <App />
    </StrictMode>
  </Provider>,
  document.getElementById('root'),
);
