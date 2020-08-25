import { createContext, useContext } from 'react';
// import stores
import baseStore from './baseStore';
import baseStoreDecorate from './baseStoreDecorate';
import baseStoreFc from './baseStoreFc';

const store = createContext({ baseStore, baseStoreDecorate, baseStoreFc });
const useStore = () => useContext(store);
export default useStore;