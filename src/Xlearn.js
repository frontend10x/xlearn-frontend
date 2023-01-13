import { AppRouter } from './routers/AppRouter';
import { Provider } from 'react-redux';
import { store, persistor } from './store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useEffect } from 'react';


export const Xlearn = () => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      localStorage.clear();
      sessionStorage.clear();
      caches.delete('my-cache-name');
    }, 24 * 60 * 60 * 1000); // 24 hours

    return () => clearInterval(intervalId);
  }, []);


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
