import { IsBoolean, IsInt, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { ApiProperty } from '@nestjs/swagger';

export class CreateAssignatureTypeDto {

    @ApiProperty({
        example: 'Academia + Esteira'
    })
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty({
        example: 100.00
    })
    @IsNumber()
    @IsNotEmpty()
    price: number;

    @ApiProperty({
        example: 7
    })
    @IsInt()
    @IsNotEmpty()   
    daysPerWeek: number;

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    @IsNotEmpty()
    hasTreadmill: boolean;

    @ApiProperty({
        example: true
    })
    @IsBoolean()
    @IsNotEmpty()
    hasGym: boolean;

    @ApiProperty({
        example: false
    })
    @IsBoolean()
    @IsNotEmpty()
    hasBoxy: boolean;

    @ApiProperty({
        example: false
    })
    @IsBoolean()
    @IsNotEmpty()
    hasSwimming: boolean;

    @ApiProperty({
        example: '123456'
    })
    @IsString()
    gatewayPlanId: string;
}
