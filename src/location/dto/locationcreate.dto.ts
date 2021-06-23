import { ApiProperty } from "@nestjsx/crud/lib/crud";

export class LocationCreateDto {
    @ApiProperty()
    location: string;

    @ApiProperty()
    pincode: number;
}