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
import { CarImageUpdateManyWithoutCarsInput } from "./CarImageUpdateManyWithoutCarsInput";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { IsJSONValue } from "@app/custom-validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";

@InputType()
class CarUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CarImageUpdateManyWithoutCarsInput,
  })
  @ValidateNested()
  @Type(() => CarImageUpdateManyWithoutCarsInput)
  @IsOptional()
  @Field(() => CarImageUpdateManyWithoutCarsInput, {
    nullable: true,
  })
  carImages?: CarImageUpdateManyWithoutCarsInput;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deletedAt?: Date | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  lessorId?: UserWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  make?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  model?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  parkedLocation?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  registrationInfo?: string;

  @ApiProperty({
    required: false,
    type: () => RentalUpdateManyWithoutCarsInput,
  })
  @ValidateNested()
  @Type(() => RentalUpdateManyWithoutCarsInput)
  @IsOptional()
  @Field(() => RentalUpdateManyWithoutCarsInput, {
    nullable: true,
  })
  rentals?: RentalUpdateManyWithoutCarsInput;
}

export { CarUpdateInput as CarUpdateInput };
