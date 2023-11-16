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
import { CommentLikeWhereUniqueInput } from "./CommentLikeWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CommentLikeFindUniqueArgs {
  @ApiProperty({
    required: true,
    type: () => CommentLikeWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommentLikeWhereUniqueInput)
  @Field(() => CommentLikeWhereUniqueInput, { nullable: false })
  where!: CommentLikeWhereUniqueInput;
}

export { CommentLikeFindUniqueArgs as CommentLikeFindUniqueArgs };