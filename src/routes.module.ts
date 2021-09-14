import { Module } from '@nestjs/common';

import { TicketsModule } from './modules/tickets/tickets.module';

@Module({
  imports: [TicketsModule],
  exports: [TicketsModule],
})
export class RoutesModule {}
