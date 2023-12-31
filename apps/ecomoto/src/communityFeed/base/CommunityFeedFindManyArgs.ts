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
import { CommunityFeedWhereInput } from "./CommunityFeedWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommunityFeedOrderByInput } from "./CommunityFeedOrderByInput";

@ArgsType()
class CommunityFeedFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommunityFeedWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommunityFeedWhereInput, { nullable: true })
  @Type(() => CommunityFeedWhereInput)
  where?: CommunityFeedWhereInput;

  @ApiProperty({
    required: false,
    type: [CommunityFeedOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommunityFeedOrderByInput], { nullable: true })
  @Type(() => CommunityFeedOrderByInput)
  orderBy?: Array<CommunityFeedOrderByInput>;

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

export { CommunityFeedFindManyArgs as CommunityFeedFindManyArgs };
