import React from "react";
import { render } from "@testing-library/react";
import User from "./User";

test("renders a user", () => {
  let aUser = { lastName: "Doe", firstName: "John", email: "jdoe@test.com" };
  const { getByText } = render(<User user={aUser} />);
  expect(getByText(/Doe/)).toBeInTheDocument();
  expect(getByText(/John/)).toBeInTheDocument();
  expect(getByText(/jdoe@test.com/)).toBeInTheDocument();
});
