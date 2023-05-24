import {NewsAppContext} from './NewsAppContext';

export const NewsAppProvider = ({children}: any) => {
  return (
    <NewsAppContext.Provider value={{}}>{children}</NewsAppContext.Provider>
  );
};
