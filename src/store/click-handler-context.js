import { createContext, useState } from 'react';

export const ClickHandlerContext = createContext({});

function ClickHandlerProvider(props) {
  const [isActive, setIsActive] = useState(false);

  function buttonClickHandler() {
    setIsActive(() => !isActive);
  }

  return (
    <ClickHandlerContext.Provider
      value={{ isActive, setIsActive, buttonClickHandler }}
    >
      {props.children}
    </ClickHandlerContext.Provider>
  );
}

export default ClickHandlerProvider;
