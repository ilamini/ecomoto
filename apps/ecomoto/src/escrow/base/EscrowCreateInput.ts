/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsString,
  IsOptional,
  IsNumber,
  IsEnum,
  ValidateNested,
} from "class-validator";
import { EnumEscrowDepositStatus } from "./EnumEscrowDepositStatus";
import { RentalWhereUniqueInput } from "../../rental/base/RentalWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class EscrowCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  blockchainHash?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  deletedAt?: string | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  depositAmount?: number | null;

  @ApiProperty({
    required: true,
    enum: EnumEscrowDepositStatus,
  })
  @IsEnum(EnumEscrowDepositStatus)
  @Field(() => EnumEscrowDepositStatus)
  depositStatus!: "Active" | "Settled" | "Reversed";

  @ApiProperty({
    required: true,
    type: () => RentalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RentalWhereUniqueInput)
  @Field(() => RentalWhereUniqueInput)
  rentalId!: RentalWhereUniqueInput;
}

export { EscrowCreateInput as EscrowCreateInput };
