import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GalleryModule } from './gallery/gallery.module';
import { CoreModule } from './core/core.module';

@Module({
  imports: [GalleryModule, CoreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
