import  { createContext } from 'react';
import PropTypes from 'prop-types';
import { food_list } from '../src/assets/assets';

export const StoreContext = createContext(null);

export const StoreContextProvider = (props) => {
  const contextValue = {
    food_list,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

StoreContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StoreContextProvider;
