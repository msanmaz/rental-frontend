import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFormStatus } from "react-dom";

const SignInButton = () => {
  const { pending } = useFormStatus();

  return (
    <>
      <Button className="w-full" type="submit" disabled={pending}>
        {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Sign in"
        )}
      </Button>
    </>
  );
};

export default SignInButton;
