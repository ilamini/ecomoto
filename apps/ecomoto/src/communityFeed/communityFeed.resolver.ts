import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { CommunityFeedResolverBase } from "./base/communityFeed.resolver.base";
import { CommunityFeed } from "./base/CommunityFeed";
import { CommunityFeedService } from "./communityFeed.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => CommunityFeed)
export class CommunityFeedResolver extends CommunityFeedResolverBase {
  constructor(
    protected readonly service: CommunityFeedService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
