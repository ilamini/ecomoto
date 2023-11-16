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
import { CommentLikeListRelationFilter } from "../../commentLike/base/CommentLikeListRelationFilter";
import { ValidateNested, IsOptional, IsEnum } from "class-validator";
import { Type } from "class-transformer";
import { CommentListRelationFilter } from "../../comment/base/CommentListRelationFilter";
import { CommunityListRelationFilter } from "../../community/base/CommunityListRelationFilter";
import { CommunityFeedListRelationFilter } from "../../communityFeed/base/CommunityFeedListRelationFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FeedLikeListRelationFilter } from "../../feedLike/base/FeedLikeListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { EnumUserUserType } from "./EnumUserUserType";

@InputType()
class UserWhereInput {
  @ApiProperty({
    required: false,
    type: () => CommentLikeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentLikeListRelationFilter)
  @IsOptional()
  @Field(() => CommentLikeListRelationFilter, {
    nullable: true,
  })
  commentLikes?: CommentLikeListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommentListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommentListRelationFilter)
  @IsOptional()
  @Field(() => CommentListRelationFilter, {
    nullable: true,
  })
  comments?: CommentListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommunityListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommunityListRelationFilter)
  @IsOptional()
  @Field(() => CommunityListRelationFilter, {
    nullable: true,
  })
  communities?: CommunityListRelationFilter;

  @ApiProperty({
    required: false,
    type: () => CommunityFeedListRelationFilter,
  })
  @ValidateNested()
  @Type(() => CommunityFeedListRelationFilter)
  @IsOptional()
  @Field(() => CommunityFeedListRelationFilter, {
    nullable: true,
  })
  communityFeeds?: CommunityFeedListRelationFilter;

  @ApiProperty({
    required: false,
    type: DateTimeNullableFilter,
  })
  @Type(() => DateTimeNullableFilter)
  @IsOptional()
  @Field(() => DateTimeNullableFilter, {
    nullable: true,
  })
  deletedAt?: DateTimeNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  email?: StringFilter;

  @ApiProperty({
    required: false,
    type: () => FeedLikeListRelationFilter,
  })
  @ValidateNested()
  @Type(() => FeedLikeListRelationFilter)
  @IsOptional()
  @Field(() => FeedLikeListRelationFilter, {
    nullable: true,
  })
  feedLikes?: FeedLikeListRelationFilter;

  @ApiProperty({
    required: false,
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  firstName?: StringNullableFilter;

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
    type: StringNullableFilter,
  })
  @Type(() => StringNullableFilter)
  @IsOptional()
  @Field(() => StringNullableFilter, {
    nullable: true,
  })
  lastName?: StringNullableFilter;

  @ApiProperty({
    required: false,
    type: StringFilter,
  })
  @Type(() => StringFilter)
  @IsOptional()
  @Field(() => StringFilter, {
    nullable: true,
  })
  username?: StringFilter;

  @ApiProperty({
    required: false,
    enum: EnumUserUserType,
  })
  @IsEnum(EnumUserUserType)
  @IsOptional()
  @Field(() => EnumUserUserType, {
    nullable: true,
  })
  userType?: "Lessee" | "Lessor";
}

export { UserWhereInput as UserWhereInput };
