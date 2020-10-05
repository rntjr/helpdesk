import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { options } from './Database/options'
import path from 'path'

@Module({
  imports: [
    TypeOrmModule.forRoot(options),
    GraphQLModule.forRoot({
      autoSchemaFile: path.join(__dirname, 'schema.gql'),
      playground: true,
      installSubscriptionHandlers: true
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
