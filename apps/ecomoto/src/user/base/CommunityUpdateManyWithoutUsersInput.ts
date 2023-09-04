/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { CommunityWhereUniqueInput } from "../../community/base/CommunityWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class CommunityUpdateManyWithoutUsersInput {
  @Field(() => [CommunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityWhereUniqueInput],
  })
  connect?: Array<CommunityWhereUniqueInput>;

  @Field(() => [CommunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityWhereUniqueInput],
  })
  disconnect?: Array<CommunityWhereUniqueInput>;

  @Field(() => [CommunityWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [CommunityWhereUniqueInput],
  })
  set?: Array<CommunityWhereUniqueInput>;
}

export { CommunityUpdateManyWithoutUsersInput as CommunityUpdateManyWithoutUsersInput };
