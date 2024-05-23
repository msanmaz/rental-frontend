// components/AmenitiesInput.js
import { Input } from "@/components/ui/input";
import { FormSection } from "./form-section";

export function AmenitiesInput() {
  return (
    <FormSection htmlFor="amenities" label="Amenities">
      <Input id="amenities" placeholder="Enter amenities"  />
    </FormSection>
  );
}
