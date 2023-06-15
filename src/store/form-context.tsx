import React, { useState } from "react";

interface FormContextType {
  formIsShown: boolean;
  setFormIsShown: React.Dispatch<React.SetStateAction<boolean>>;
  formSucceed: boolean;
  setFormSucceed: React.Dispatch<React.SetStateAction<boolean>>;
}

export const FormContext = React.createContext<FormContextType>({
  formIsShown: false,
  setFormIsShown: () => {},
  formSucceed: false,
  setFormSucceed: () => {},
});

export const DataProvider = ({ children }: any) => {
  const [formIsShown, setFormIsShown] = useState(false);
  const [formSucceed, setFormSucceed] = useState(false);

  return (
    <FormContext.Provider
      value={{ formIsShown, setFormIsShown, formSucceed, setFormSucceed }}
    >
      {children}
    </FormContext.Provider>
  );
};
