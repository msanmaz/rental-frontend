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
        <SelectItem value="1">Istanbul</SelectItem>
        <SelectItem value="2">Bodrum</SelectItem>
          <SelectItem value="3">Stuttgart</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
