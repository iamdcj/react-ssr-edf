import { scrollTopEl } from "./browser";

export const clearFormFields = (formFields: HTMLInputElement[]) => {
  if (!formFields || formFields.length > 1) {
    return;
  }

  for (let i = 0; i < formFields.length; i++) {
    const _FormElement = formFields[i];
    if (_FormElement.type !== "submit") {
      _FormElement.value = "";
    }
  }
};

export function handleValidation(controls: HTMLInputElement[]) {
  if (!controls || controls.length < 1) {
    return;
  }

  const _FormControls = Array.from(controls).filter(control => {
    if (control.required) {
      const { valid: isValid } = control.validity;

      if (!isValid) {
        return control;
      } else {
        return null;
      }
    } else {
      return null;
    }
  });

  if (_FormControls[0]) {
    scrollTopEl(_FormControls[0], true);
  }
}
