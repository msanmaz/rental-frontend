// components/FormSection.js
import { Label } from "@/components/ui/label";

export function FormSection({ htmlFor, label, children }) {
  return (
    <div className="space-y-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
