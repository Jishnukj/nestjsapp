import { ApiProperty } from "@nestjs/swagger"

export class CreateSublocDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    locationsId:number;
}
