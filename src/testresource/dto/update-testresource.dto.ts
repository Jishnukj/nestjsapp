import { PartialType } from '@nestjs/swagger';
import { CreateTestresourceDto } from './create-testresource.dto';

export class UpdateTestresourceDto extends PartialType(CreateTestresourceDto) {}
