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
import { CommentLikeUpdateManyWithoutUsersInput } from "./CommentLikeUpdateManyWithoutUsersInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsEnum,
} from "class-validator";
import { Type } from "class-transformer";
import { CommentUpdateManyWithoutUsersInput } from "./CommentUpdateManyWithoutUsersInput";
import { CommunityUpdateManyWithoutUsersInput } from "./CommunityUpdateManyWithoutUsersInput";
import { IsJSONValue } from "../../validators";
import { GraphQLJSON } from "graphql-type-json";
import { InputJsonValue } from "../../types";
import { UserFeedUpdateManyWithoutUsersInput } from "./UserFeedUpdateManyWithoutUsersInput";
import { EnumUserUserType } from "./EnumUserUserType";

@InputType()
class UserUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommentLikeUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentLikeUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentLikeUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  commentLikes?: CommentLikeUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommentUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommentUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommentUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  comments?: CommentUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: () => CommunityUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => CommunityUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => CommunityUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  communities?: CommunityUpdateManyWithoutUsersInput;

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
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  email?: string;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  firstName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  lastName?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  password?: string;

  @ApiProperty({
    required: false,
  })
  @IsJSONValue()
  @IsOptional()
  @Field(() => GraphQLJSON, {
    nullable: true,
  })
  roles?: InputJsonValue;

  @ApiProperty({
    required: false,
    type: () => UserFeedUpdateManyWithoutUsersInput,
  })
  @ValidateNested()
  @Type(() => UserFeedUpdateManyWithoutUsersInput)
  @IsOptional()
  @Field(() => UserFeedUpdateManyWithoutUsersInput, {
    nullable: true,
  })
  userFeeds?: UserFeedUpdateManyWithoutUsersInput;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  username?: string;

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

export { UserUpdateInput as UserUpdateInput };
