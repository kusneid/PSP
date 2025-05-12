import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';
import { FileService } from '../file.service';
import { Stock } from './entities/stock.entity';

@Injectable()
export class StocksService {
  constructor(private readonly fileService: FileService<Stock[]>) {}

  async create(createStockDto: CreateStockDto) {
    const stocks = await this.fileService.read();
    const newStock: Stock = {
      id: stocks.length + 1,
      ...createStockDto,
    };
    await this.fileService.add(newStock);
    return newStock;
  }

  async findAll() {
    return await this.fileService.read();
  }

  async findOne(id: number) {
    const stocks = await this.fileService.read();
    const stock = stocks.find((stock) => stock.id === id);
    if (!stock) {
      throw new NotFoundException(`Stock with ID ${id} not found`);
    }
    return stock;
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    const stocks = await this.fileService.read();
    const stockIndex = stocks.findIndex((stock) => stock.id === id);
    if (stockIndex === -1) {
      throw new NotFoundException(`Stock with ID ${id} not found`);
    }
    const updatedStock = { ...stocks[stockIndex], ...updateStockDto };
    stocks[stockIndex] = updatedStock;
    await this.fileService.write(stocks);
    return updatedStock;
  }

  async remove(id: number) {
    const stocks = await this.fileService.read();
    const stockIndex = stocks.findIndex((stock) => stock.id === id);
    if (stockIndex === -1) {
      throw new NotFoundException(`Stock with ID ${id} not found`);
    }
    const deletedStock = stocks[stockIndex];
    stocks.splice(stockIndex, 1);
    await this.fileService.write(stocks);
    return deletedStock;
  }
}
