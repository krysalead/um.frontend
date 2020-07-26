import React from "react";
import { render } from "@testing-library/react";
import UserList from "./UserList";

test("renders a list of user", () => {
  let aUserList = [
    { lastName: "Doe", firstName: "John", email: "jdoe@test.com" },
    { lastName: "Tester", firstName: "test", email: "ttester@test.com" },
  ];
  const { getByText } = render(<UserList users={aUserList} />);
  expect(getByText(/jdoe@test.com/)).toBeInTheDocument();
  expect(getByText(/ttester@test.com/)).toBeInTheDocument();
});
