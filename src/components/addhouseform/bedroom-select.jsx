// components/BedroomsSelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function BedroomsSelect() {
  return (
    <FormSection htmlFor="rooms" label="Bedrooms">
      <Select type="bedroom" name="rooms"  defaultValue="3" id="rooms">
        <SelectTrigger>
          <SelectValue placeholder="Select bedrooms" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">1</SelectItem>
          <SelectItem value="2">2</SelectItem>
          <SelectItem value="3">3</SelectItem>
          <SelectItem value="4">4</SelectItem>
          <SelectItem value="5">5+</SelectItem>
        </SelectContent>
      </Select>
    </FormSection>
  );
}
