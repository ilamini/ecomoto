/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommunityFeedWhereUniqueInput } from "../../communityFeed/base/CommunityFeedWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommunityFeedUpdateManyWithoutUsersInput {
  @Field(() => [CommunityFeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityFeedWhereUniqueInput],
  })
  connect?: Array<CommunityFeedWhereUniqueInput>;

  @Field(() => [CommunityFeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityFeedWhereUniqueInput],
  })
  disconnect?: Array<CommunityFeedWhereUniqueInput>;

  @Field(() => [CommunityFeedWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityFeedWhereUniqueInput],
  })
  set?: Array<CommunityFeedWhereUniqueInput>;
}

export { CommunityFeedUpdateManyWithoutUsersInput as CommunityFeedUpdateManyWithoutUsersInput };
