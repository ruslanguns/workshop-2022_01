import { Module, Global } from '@nestjs/common';
import { DataService } from './data/data.service';

@Global()
@Module({
  providers: [DataService],
  exports: [DataService],
})
export class CoreModule {}
