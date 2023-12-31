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
import { MediaWhereInput } from "./MediaWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { MediaOrderByInput } from "./MediaOrderByInput";

@ArgsType()
class MediaFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => MediaWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => MediaWhereInput, { nullable: true })
  @Type(() => MediaWhereInput)
  where?: MediaWhereInput;

  @ApiProperty({
    required: false,
    type: [MediaOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [MediaOrderByInput], { nullable: true })
  @Type(() => MediaOrderByInput)
  orderBy?: Array<MediaOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { MediaFindManyArgs as MediaFindManyArgs };
