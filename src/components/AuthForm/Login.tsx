import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";
import useLogin, { LoginDetails } from "../../hooks/useLogin";

const Login = () => {
  const [loginDetails, setLoginDetails] = useState<LoginDetails>({
    email: "",
    password: "",
  });
  const { logIn, loading } = useLogin(loginDetails);
  return (
    <>
      <Input
        placeholder="Email"
        size="sm"
        borderRadius="5"
        type="email"
        value={loginDetails.email}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, email: e.target.value })
        }
      />
      <Input
        placeholder="Password"
        size="sm"
        borderRadius="5"
        type="password"
        value={loginDetails.password}
        onChange={(e) =>
          setLoginDetails({ ...loginDetails, password: e.target.value })
        }
      />
      <Button
        width="full"
        colorScheme="blue"
        onClick={logIn}
        isLoading={loading}
      >
        Log In
      </Button>
    </>
  );
};

export default Login;
