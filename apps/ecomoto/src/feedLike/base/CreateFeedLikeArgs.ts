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
import { FeedLikeCreateInput } from "./FeedLikeCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateFeedLikeArgs {
  @ApiProperty({
    required: true,
    type: () => FeedLikeCreateInput,
  })
  @ValidateNested()
  @Type(() => FeedLikeCreateInput)
  @Field(() => FeedLikeCreateInput, { nullable: false })
  data!: FeedLikeCreateInput;
}

export { CreateFeedLikeArgs as CreateFeedLikeArgs };
