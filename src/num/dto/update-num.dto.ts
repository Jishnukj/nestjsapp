import { PartialType } from '@nestjs/swagger';
import { CreateNumDto } from './create-num.dto';

export class UpdateNumDto extends PartialType(CreateNumDto) {}
