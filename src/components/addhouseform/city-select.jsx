// components/CitySelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function CitySelect() {
  return (
    <FormSection htmlFor="cityName" label="City">
      <Select defaultValue="Istanbul" name="cityName" id="cityName">
        <SelectTrigger>
          <SelectValue placeholder="Select city" />
        </SelectTrigger>
        <SelectContent>
        <SelectItem value="Istanbul">Istanbul</SelectItem>
        <SelectItem value="New York">New York</SelectItem>
          <SelectItem value="London">London</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
