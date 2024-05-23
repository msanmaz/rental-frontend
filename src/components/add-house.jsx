import { SubmitButton } from "./actionButtons/submit-button";
import { AddressInput } from "./addhouseform/adress-input";
import { AmenitiesInput } from "./addhouseform/amenities-input";
import { BathroomsSelect } from "./addhouseform/bathroom-select";
import { BedroomsSelect } from "./addhouseform/bedroom-select";
import { CitySelect } from "./addhouseform/city-select";
import { DescriptionTextarea } from "./addhouseform/description-text";
import { ImageUpload } from "./addhouseform/image-upload";
import { PropertyTypeSelect } from "./addhouseform/property-type-select";


export function AddHouseForm() {
  return (
    <div className="w-full mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg dark:bg-muted/50">
      <h1 className="text-3xl font-bold mb-6 text-center">
        List Your Property
      </h1>
      <form
        className="grid grid-cols-1 sm:grid-cols-3 gap-6"
      >
        <PropertyTypeSelect />
        <BedroomsSelect/>
        <BathroomsSelect />
        <AddressInput />
        <CitySelect />
        <AmenitiesInput />
        <div className="col-span-3">
        <DescriptionTextarea />
        </div>
        <div className="col-span-3 space-y-2">
        <ImageUpload />
        </div>
        <SubmitButton />
      </form>
    </div>
  );
}
