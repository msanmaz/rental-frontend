import { Label } from "@/components/ui/label"
import { Select, SelectTrigger, SelectValue, SelectItem, SelectContent } from "@/components/ui/select"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"

export default function FilterForm() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-lg p-6">
      <h2 className="text-lg font-semibold mb-4">Filter Yachts</h2>
      <form className="grid gap-6">
        <div>
          <Label className="block mb-2 text-sm font-medium" htmlFor="location">
            Location
          </Label>
          <Select className="w-full" id="location">
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="miami">Miami</SelectItem>
              <SelectItem value="santorini">Santorini</SelectItem>
              <SelectItem value="amalfi">Amalfi Coast</SelectItem>
              <SelectItem value="bali">Bali</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium" htmlFor="price-range">
            Price Range
          </Label>
          <Slider className="w-full" defaultValue={[1000, 20000]} max={300} step={10}>
            <div className="flex justify-between w-full px-2 text-xs">
              <span>$1,000</span>
              <span>$30,000</span>
            </div>
          </Slider>
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium" htmlFor="size">
            Size
          </Label>
          <Select className="w-full" id="size">
            <SelectTrigger>
              <SelectValue placeholder="Select size" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="small">Small (up to 50 ft)</SelectItem>
              <SelectItem value="medium">Medium (50-80 ft)</SelectItem>
              <SelectItem value="large">Large (80+ ft)</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="block mb-2 text-sm font-medium" htmlFor="amenities">
            Amenities
          </Label>
            <div className="grid gap-2">
              <Label className="flex items-center gap-2" htmlFor="amenity-jacuzzi">
                <Checkbox id="amenity-jacuzzi" value="jacuzzi" />
                Jacuzzi
              </Label>
              <Label className="flex items-center gap-2" htmlFor="amenity-helipad">
                <Checkbox id="amenity-helipad" value="helipad" />
                Helipad
              </Label>
              <Label className="flex items-center gap-2" htmlFor="amenity-gym">
                <Checkbox id="amenity-gym" value="gym" />
                Gym
              </Label>
              <Label className="flex items-center gap-2" htmlFor="amenity-chef">
                <Checkbox id="amenity-chef" value="chef" />
                Private Chef
              </Label>
            </div>
        </div>
        <Button>Apply Filters</Button>
      </form>
    </div>
  )
}
