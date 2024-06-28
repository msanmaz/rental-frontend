// components/DescriptionTextarea.js
import { Textarea } from "@/components/ui/textarea";
import { FormSection } from "./form-section";

export function DescriptionTextarea() {
  return (
    <FormSection htmlFor="description" label="Description">
       <div className="col-span-1 space-y-2">
          <Textarea name='description' id="description" placeholder="Enter property description" rows={4} />
        </div>
    </FormSection>
  );
}
