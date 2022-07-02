import '../../styles/globals.css'
import {store} from '../../redux/store'
import { Provider } from "react-redux";
import {persistStore} from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react';

let persistor = persistStore(store)
function MyApp({ Component, pageProps }) {

  return <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
}

export default MyApp
