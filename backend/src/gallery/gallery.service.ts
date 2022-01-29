import { Injectable } from '@nestjs/common';
import { DataService } from 'src/core/data/data.service';
import { CreateGalleryItem } from './dto/create-gallery-item.dto';

@Injectable()
export class GalleryService {
  constructor(private readonly dataService: DataService) {}

  addItem(data: CreateGalleryItem) {
    return this.dataService.user.create({ data });
  }

  getMany() {
    return this.dataService.user.findMany();
  }

  getById(id: string) {
    return this.dataService.user.findUnique({ where: { id } });
  }
}
