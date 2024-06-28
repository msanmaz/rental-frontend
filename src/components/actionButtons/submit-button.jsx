// components/SubmitButton.js
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <div className="col-span-3 flex justify-end">
      <Button size="lg" type="submit">
      {pending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Please Wait
          </>
        ) : (
          "Submit"
        )}
      </Button>
    </div>
  );
}
