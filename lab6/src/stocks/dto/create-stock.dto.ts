import { IsString, IsNumber, Length, Min } from 'class-validator';

export class CreateStockDto {
  @IsString()
  @Length(1, 100)
  name: string;

  @IsNumber()
  @Min(0)
  price: number;

  @IsNumber()
  @Min(0)
  quantity: number;
}
