// components/BathroomsSelect.js
import { Select, SelectValue, SelectTrigger, SelectItem, SelectContent } from "@/components/ui/select";
import { FormSection } from "./form-section";

export function BathroomsSelect() {
  return (
    <FormSection htmlFor="bathrooms" label="Bathrooms">
      <Select defaultValue="2" id="bathrooms" >
        <SelectTrigger>
          <SelectValue placeholder="Select bathrooms" />
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
