import { PartialType } from '@nestjs/swagger';
import { ApiProperty } from '@nestjsx/crud/lib/crud';
import { CreateSublocDto } from './create-subloc.dto';

export class UpdateSublocDto extends PartialType(CreateSublocDto) {
    @ApiProperty()
    id:number;
}
