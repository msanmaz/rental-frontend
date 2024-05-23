// components/PropertyTypeSelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function PropertyTypeSelect() {
  return (
    <FormSection htmlFor="propertyTypeId" label="Property Type">
      <Select defaultValue="house" id="propertyTypeId">
        <SelectTrigger>
          <SelectValue placeholder="Select property type" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">House</SelectItem>
          <SelectItem value="2">Apartment</SelectItem>
          <SelectItem value="3">Condo</SelectItem>
          <SelectItem value="4">Townhouse</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
