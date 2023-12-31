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
import { FeedLikeWhereInput } from "./FeedLikeWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FeedLikeListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FeedLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedLikeWhereInput)
  @IsOptional()
  @Field(() => FeedLikeWhereInput, {
    nullable: true,
  })
  every?: FeedLikeWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedLikeWhereInput)
  @IsOptional()
  @Field(() => FeedLikeWhereInput, {
    nullable: true,
  })
  some?: FeedLikeWhereInput;

  @ApiProperty({
    required: false,
    type: () => FeedLikeWhereInput,
  })
  @ValidateNested()
  @Type(() => FeedLikeWhereInput)
  @IsOptional()
  @Field(() => FeedLikeWhereInput, {
    nullable: true,
  })
  none?: FeedLikeWhereInput;
}
export { FeedLikeListRelationFilter as FeedLikeListRelationFilter };
