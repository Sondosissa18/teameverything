import React, { PropTypes } from "react";

import classNames from "classnames";

let getFormInputClasses = ({ valid, error }) =>
  classNames("form-input", {
    "form-input--error": !!error,
  });

let FormInput = (props) => (
  <span className={getFormInputClasses(props)}>
    <input
      {...props}
      type={props.type || "test"}
      className="form-input__field"
      onChange={(e) => props.onChange(e.target.name, e.target.value)}
    />

    {props.error && <div className="form-input__error">{props.error}</div>}
  </span>
);

// FormInput.PropTypes = {
//   onChange: PropTypes.func.isRequired,

//   name: PropTypes.string.isRequired,

//   type: PropTypes.oneOf(["text", "email", "password"]),

//   error: PropTypes.string,

//   placeholder: PropTypes.string,
// };

export default FormInput;


