import { ApiProperty } from "@nestjs/swagger/dist/decorators/api-property.decorator";

export class CreateUserDto {
    @ApiProperty()
    name: string;
    @ApiProperty()
    age: number;
}