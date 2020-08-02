import React from "react";
import { TextField, FormControl, FormHelperText } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./AddUser.css";
import { useForm } from "react-hook-form";

const buttonStyle = {
  margin: "1em",
};

const requiredMessage = "This field is required";
const validEmailMessage = requiredMessage + " and should be a valid email";

const AddUser = (props) => {
  const { register, handleSubmit, errors } = useForm();
  const doAdd = (data) => {
    if (data) {
      props.onUserAdd(data);
    }
    return false;
  };

  return (
    <form className="adduser-form" onSubmit={handleSubmit(doAdd)}>
      <div>
        <FormControl>
          <TextField
            id="adduser-firstName"
            label="First Name"
            name="firstName"
            error={errors.firstName}
            inputRef={register({ required: true })}
          />
          {errors.firstName && (
            <FormHelperText error={true}>{requiredMessage}</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <TextField
            id="adduser-lastName"
            label="Last Name"
            name="lastName"
            error={errors.lastName}
            inputRef={register({ required: true })}
          />
          {errors.lastName && (
            <FormHelperText error={true}>{requiredMessage}</FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <TextField
            id="adduser-email"
            label="Email"
            name="email"
            error={errors.email}
            inputRef={register({
              required: true,
              // eslint-disable-next-line
              pattern: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
            })}
          />
          {errors.email && (
            <FormHelperText error={true}>{validEmailMessage}</FormHelperText>
          )}
        </FormControl>
      </div>
      <Button
        type="submit"
        className="adduser-submit-btn"
        variant="contained"
        color="primary"
        style={buttonStyle}
      >
        Add User
      </Button>
    </form>
  );
};
export default AddUser;
