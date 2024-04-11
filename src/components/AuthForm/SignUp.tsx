import { Button, Input } from "@chakra-ui/react";
import { useState } from "react";

interface SignUpDetails {
  fullName: string;
  username: string;
  email: string;
  password: string;
}

const SignUp = () => {
  const [signUpDetails, setSignUpDetails] = useState<SignUpDetails>(
    {} as SignUpDetails
  );
  return (
    <>
      <Input
        placeholder="Full Name"
        type="text"
        size="sm"
        borderRadius="5"
        value={signUpDetails.fullName}
        onChange={(e) =>
          setSignUpDetails({ ...signUpDetails, fullName: e.target.value })
        }
      />
      <Input
        placeholder="UserName"
        size="sm"
        type="text"
        borderRadius="5"
        value={signUpDetails.username}
        onChange={(e) =>
          setSignUpDetails({ ...signUpDetails, username: e.target.value })
        }
      />
      <Input
        placeholder="Email"
        type="email"
        size="sm"
        borderRadius="5"
        value={signUpDetails.email}
        onChange={(e) =>
          setSignUpDetails({ ...signUpDetails, email: e.target.value })
        }
      />
      <Input
        placeholder="Password"
        type="password"
        size="sm"
        borderRadius="5"
        value={signUpDetails.password}
        onChange={(e) =>
          setSignUpDetails({ ...signUpDetails, password: e.target.value })
        }
      />
      <Button width="full" colorScheme="blue">
        SignUp
      </Button>
    </>
  );
};

export default SignUp;
