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
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { UserFeedWhereUniqueInput } from "../../userFeed/base/UserFeedWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class MediaCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  createdBy?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  imageUrl?: string | null;

  @ApiProperty({
    required: false,
    type: () => UserFeedWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserFeedWhereUniqueInput)
  @IsOptional()
  @Field(() => UserFeedWhereUniqueInput, {
    nullable: true,
  })
  userFeed?: UserFeedWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  videoUrl?: string | null;
}

export { MediaCreateInput as MediaCreateInput };
