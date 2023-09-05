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
import { CommunityFeedCreateNestedManyWithoutCommunitiesInput } from "./CommunityFeedCreateNestedManyWithoutCommunitiesInput";
import { ValidateNested, IsOptional, IsString } from "class-validator";
import { Type } from "class-transformer";
import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";

@InputType()
class CommunityCreateInput {
  @ApiProperty({
    required: false,
    type: () => CommunityFeedCreateNestedManyWithoutCommunitiesInput,
  })
  @ValidateNested()
  @Type(() => CommunityFeedCreateNestedManyWithoutCommunitiesInput)
  @IsOptional()
  @Field(() => CommunityFeedCreateNestedManyWithoutCommunitiesInput, {
    nullable: true,
  })
  communityFeeds?: CommunityFeedCreateNestedManyWithoutCommunitiesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  communityHeadeImgUrl!: string;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  description!: string;

  @ApiProperty({
    required: false,
    type: () => UserCreateNestedManyWithoutCommunitiesInput,
  })
  @ValidateNested()
  @Type(() => UserCreateNestedManyWithoutCommunitiesInput)
  @IsOptional()
  @Field(() => UserCreateNestedManyWithoutCommunitiesInput, {
    nullable: true,
  })
  members?: UserCreateNestedManyWithoutCommunitiesInput;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  name!: string;
}

export { CommunityCreateInput as CommunityCreateInput };
