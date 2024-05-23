// components/CitySelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function CitySelect() {
  return (
    <FormSection htmlFor="cityId" label="City">
      <Select defaultValue="1" id="cityId">
        <SelectTrigger>
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">City 1</SelectItem>
          <SelectItem value="2">City 2</SelectItem>
          <SelectItem value="3">City 3</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
