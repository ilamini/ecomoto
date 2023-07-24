/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CarImageWhereUniqueInput } from "./CarImageWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { CarImageUpdateInput } from "./CarImageUpdateInput";

@ArgsType()
class UpdateCarImageArgs {
  @ApiProperty({
    required: true,
    type: () => CarImageWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarImageWhereUniqueInput)
  @Field(() => CarImageWhereUniqueInput, { nullable: false })
  where!: CarImageWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => CarImageUpdateInput,
  })
  @ValidateNested()
  @Type(() => CarImageUpdateInput)
  @Field(() => CarImageUpdateInput, { nullable: false })
  data!: CarImageUpdateInput;
}

export { UpdateCarImageArgs as UpdateCarImageArgs };