import { IsString, IsUrl, Length } from 'class-validator';

export class CreateStockDto {
  @IsUrl()
  src: string;

  @IsString()
  @Length(1, 100)
  title: string;

  @IsString()
  @Length(1, 500)
  text: string;
}
