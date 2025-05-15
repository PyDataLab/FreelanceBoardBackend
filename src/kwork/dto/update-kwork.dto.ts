import { PartialType } from '@nestjs/mapped-types';
import { CreateKworkDto } from './create-kwork.dto';

export class UpdateKworkDto extends PartialType(CreateKworkDto) {}
