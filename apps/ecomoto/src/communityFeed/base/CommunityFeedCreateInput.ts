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
import { CommentCreateNestedManyWithoutCommunityFeedsInput } from "./CommentCreateNestedManyWithoutCommunityFeedsInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";
import { FeedLikeCreateNestedManyWithoutCommunityFeedsInput } from "./FeedLikeCreateNestedManyWithoutCommunityFeedsInput";
import { MediaCreateNestedManyWithoutCommunityFeedsInput } from "./MediaCreateNestedManyWithoutCommunityFeedsInput";

@InputType()
class CommunityFeedCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommentCreateNestedManyWithoutCommunityFeedsInput,
  })
  @ValidateNested()
  @Type(() => CommentCreateNestedManyWithoutCommunityFeedsInput)
  @IsOptional()
  @Field(() => CommentCreateNestedManyWithoutCommunityFeedsInput, {
    nullable: true,
  })
  comments?: CommentCreateNestedManyWithoutCommunityFeedsInput;

  @ApiProperty({
    required: false,
    type: () => CommunityWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommunityWhereUniqueInput)
  @IsOptional()
  @Field(() => CommunityWhereUniqueInput, {
    nullable: true,
  })
  community?: CommunityWhereUniqueInput | null;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  content!: string;

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
  creator?: UserWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => FeedLikeCreateNestedManyWithoutCommunityFeedsInput,
  })
  @ValidateNested()
  @Type(() => FeedLikeCreateNestedManyWithoutCommunityFeedsInput)
  @IsOptional()
  @Field(() => FeedLikeCreateNestedManyWithoutCommunityFeedsInput, {
    nullable: true,
  })
  feedLikes?: FeedLikeCreateNestedManyWithoutCommunityFeedsInput;

  @ApiProperty({
    required: false,
    type: () => MediaCreateNestedManyWithoutCommunityFeedsInput,
  })
  @ValidateNested()
  @Type(() => MediaCreateNestedManyWithoutCommunityFeedsInput)
  @IsOptional()
  @Field(() => MediaCreateNestedManyWithoutCommunityFeedsInput, {
    nullable: true,
  })
  medias?: MediaCreateNestedManyWithoutCommunityFeedsInput;
}

export { CommunityFeedCreateInput as CommunityFeedCreateInput };
