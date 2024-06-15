import { createContext, useContext } from "react";

export const FormContext = createContext();

export const useFormContext = () => {
  const context = useContext(FormContext);

  if (!context) {
    throw new Error("No Form State Provided");
  }

  return {
    form: context.form,
    setForm: context.setForm,
  };
};
