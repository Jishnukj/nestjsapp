import { PartialType } from '@nestjs/swagger';
import { CreateSublocDto } from './create-subloc.dto';

export class UpdateSublocDto extends PartialType(CreateSublocDto) {}
