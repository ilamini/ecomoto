import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FeedLikeResolverBase } from "./base/feedLike.resolver.base";
import { FeedLike } from "./base/FeedLike";
import { FeedLikeService } from "./feedLike.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FeedLike)
export class FeedLikeResolver extends FeedLikeResolverBase {
  constructor(
    protected readonly service: FeedLikeService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
