import { Controller, Post, Get } from '@nestjs/common';
import { PersonService } from './person.service';

@Controller()
export class PersonController {

    constructor(
        private readonly personService: PersonService,
    ) { }

    @Post()
    async createSample() {
        return await this.personService.createSample();
    }

    @Get()
    async findSamples() {
        return await this.personService.findSample();
     }
}
