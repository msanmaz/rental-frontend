"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { SubmitButton } from "./actionButtons/submit-button";
import { BathroomsSelect } from "./addhouseform/bathroom-select";
import { BedroomsSelect } from "./addhouseform/bedroom-select";
import { CitySelect } from "./addhouseform/city-select";
import { DescriptionTextarea } from "./addhouseform/description-text";
import { ImageUpload } from "./addhouseform/image-upload";
import { PropertyTypeSelect } from "./addhouseform/property-type-select";
import { addHouse } from "@/app/actions/houseactions";
import InputField from "./input-field";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { DatePickerWithRange } from "./addhouseform/addhouse-calendar";
import { addDays } from "date-fns"

export function AddHouseForm() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [listingType, setListingType] = useState("rent");
  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  })
  const handleSubmit = async (formData) => {
    // Create a new FormData object to modify

    // Add date range to formData
    if (date.from && date.to) {
      formData.set('availableFrom', date.from.toISOString());
      formData.set('availableTo', date.to.toISOString());
    }

    const response = await addHouse(formData);
    if (response.success) {
      console.log(response);
      router.push("/admin");
    } else {
      setError(response.message);
      console.error(response);
    }
  };

  return (
    <div className="w-full mx-auto p-6 sm:p-8 bg-white rounded-lg shadow-lg dark:bg-gray-950">
      <h1 className="text-3xl font-bold mb-6 text-center">
        List Your Property
      </h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form
        className="grid grid-cols-3 gap-6"
        action={handleSubmit}
      >
        <InputField
          id="title"
          name="title"
          label="Title"
          type="text"
          placeholder="Title"
        />
        <PropertyTypeSelect />
        <BedroomsSelect />
        <BathroomsSelect />
        <InputField
          id="address"
          name="address"
          label="Address"
          type='text'
          placeholder="Address"
        />
        <CitySelect />
        <InputField
          id="amenities"
          name="amenities"
          label="Amenities"
          type='text'
          placeholder="Amenities (comma-separated)"
        />
        <div className="col-span-3">
          <Label>Listing Type</Label>
          <RadioGroup
            name="listingType"
            className="grid grid-cols-2 gap-4 mt-2"
            onValueChange={(value) => setListingType(value)}
            defaultValue="rent"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="rent" id="rent" />
              <Label htmlFor="rent">For Rent</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="sale" id="sale" />
              <Label htmlFor="sale">For Sale</Label>
            </div>
          </RadioGroup>
        </div>

        {listingType === "rent" && (
          <>
            <InputField
              id="rent"
              name="rent"
              label="Rent"
              type="number"
              placeholder="Rent Amount"
            />
            <div className="col-span-2">
              <DatePickerWithRange
                className="w-full"
                date={date}
                setDate={setDate}
              />
            </div>
          </>
        )}

        {listingType === "sale" && (
          <InputField
            id="price"
            name="price"
            label="Price"
            type="number"
            placeholder="Sale Price"
          />
        )}

        <div className="col-span-3">
          <DescriptionTextarea />
        </div>
        <div className="col-span-3 space-y-2">
          <ImageUpload />
        </div>
        <div className="col-span-3">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
}