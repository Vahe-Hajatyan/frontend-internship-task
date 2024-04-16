import { useState } from "react";
import { LogIn, SelectLoginMethod } from "./";
import { signup, login } from "../../redux/slices/auth";

export const LoginOrRegister = () => {
  const [page, setPage] = useState("select");
  return (
    <>
      {page === "select" ? (
        <SelectLoginMethod setPage={setPage} />
      ) : page === "log in" ? (
        <LogIn
          setPage={setPage}
          title={"Login to your account"}
          footerText={["Don't have an account?", "sign up"]}
          action={login}
        />
      ) : (
        <LogIn
          setPage={setPage}
          title={"Create an account"}
          footerText={["Already have an account?", "log in"]}
          action={signup}
        />
      )}
    </>
  );
};
