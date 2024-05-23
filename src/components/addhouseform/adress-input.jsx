// components/AddressInput.js
import { Input } from "@/components/ui/input";
import { FormSection } from "./form-section";

export function AddressInput() {
  return (
    <div className="col-span-3 space-y-2">
      <FormSection htmlFor="address" label="Address">
        <div className="grid grid-cols-3 gap-4">
          <Input id="address" placeholder="Street address" />
          <Input id="state" placeholder="State"  />
          <Input id="price" placeholder="Enter price" type="number"/>
        </div>
      </FormSection>
    </div>
  );
}
