import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { EspeciesService } from "./especies.service.js";
import { EspeciesController } from "./especies.controller.js";
import { Especies } from "./especies.entity.js";

@Module({
    imports: [TypeOrmModule.forFeature([Especies])],
    controllers: [EspeciesController],
    providers: [EspeciesService],
})
export class EspeciesModule {}