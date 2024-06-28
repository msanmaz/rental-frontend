// components/PropertyTypeSelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function PropertyTypeSelect() {
  return (
    <FormSection htmlFor="propertyType" label="Property Type">
      <Select type="propertyType" name="propertyType" defaultValue="house" id="propertyType">
        <SelectTrigger>
          <SelectValue placeholder="Select property type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="Commercial">Commercial</SelectItem>
          <SelectItem value="Apartment">Apartment</SelectItem>
          <SelectItem value="Villa">Villa</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
