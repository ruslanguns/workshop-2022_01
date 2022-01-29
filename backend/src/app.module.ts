import { Module } from '@nestjs/common';
import { GalleryModule } from './gallery/gallery.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [GalleryModule, CoreModule],
})
export class AppModule {}
