import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';

export const Xlearn = () => {
  return (
    <div className="App">
      <Provider store={store} >
        <PersistGate persistor={persistor} >
          <AppRouter  />
        </PersistGate>
      </Provider>
    </div>
  );
}
