// imports
import RouterView from './src/routes/router';
import {Provider} from 'react-redux'
import {store} from './src/store/index'

export default function App() {
  return (
    <Provider store={store}>
      <RouterView/>
    </Provider>
  );
}
