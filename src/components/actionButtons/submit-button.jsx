// components/SubmitButton.js
import { Button } from "@/components/ui/button";

export function SubmitButton() {
  return (
    <div className="col-span-3 flex justify-end">
      <Button size="lg" type="submit">
        Submit
      </Button>
    </div>
  );
}
