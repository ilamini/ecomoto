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
import { CommunityFeedWhereUniqueInput } from "../../communityFeed/base/CommunityFeedWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class FeedLikeWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommunityFeedWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityFeedWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunityFeedWhereUniqueInput, {
    nullable: true,
  })
  communityFeed?: CommunityFeedWhereUniqueInput;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  id?: StringFilter;

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
  likedBy?: UserWhereUniqueInput;
}

export { FeedLikeWhereInput as FeedLikeWhereInput };
