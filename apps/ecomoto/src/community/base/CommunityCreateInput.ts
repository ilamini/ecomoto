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
import { IsString, ValidateNested, IsOptional } from "class-validator";
import { UserCreateNestedManyWithoutCommunitiesInput } from "./UserCreateNestedManyWithoutCommunitiesInput";
import { Type } from "class-transformer";

@InputType()
class CommunityCreateInput {
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
