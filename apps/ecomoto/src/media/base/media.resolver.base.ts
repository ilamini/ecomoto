/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateMediaArgs } from "./CreateMediaArgs";
import { UpdateMediaArgs } from "./UpdateMediaArgs";
import { DeleteMediaArgs } from "./DeleteMediaArgs";
import { MediaCountArgs } from "./MediaCountArgs";
import { MediaFindManyArgs } from "./MediaFindManyArgs";
import { MediaFindUniqueArgs } from "./MediaFindUniqueArgs";
import { Media } from "./Media";
import { CommunityFeed } from "../../communityFeed/base/CommunityFeed";
import { MediaService } from "../media.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Media)
export class MediaResolverBase {
  constructor(
    protected readonly service: MediaService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "any",
  })
  async _mediaItemsMeta(
    @graphql.Args() args: MediaCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Media])
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "any",
  })
  async mediaItems(@graphql.Args() args: MediaFindManyArgs): Promise<Media[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Media, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "read",
    possession: "own",
  })
  async media(
    @graphql.Args() args: MediaFindUniqueArgs
  ): Promise<Media | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Media)
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "create",
    possession: "any",
  })
  async createMedia(@graphql.Args() args: CreateMediaArgs): Promise<Media> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        communittFeed: args.data.communittFeed
          ? {
              connect: args.data.communittFeed,
            }
          : undefined,
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Media)
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "update",
    possession: "any",
  })
  async updateMedia(
    @graphql.Args() args: UpdateMediaArgs
  ): Promise<Media | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          communittFeed: args.data.communittFeed
            ? {
                connect: args.data.communittFeed,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Media)
  @nestAccessControl.UseRoles({
    resource: "Media",
    action: "delete",
    possession: "any",
  })
  async deleteMedia(
    @graphql.Args() args: DeleteMediaArgs
  ): Promise<Media | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => CommunityFeed, {
    nullable: true,
    name: "communittFeed",
  })
  @nestAccessControl.UseRoles({
    resource: "CommunityFeed",
    action: "read",
    possession: "any",
  })
  async resolveFieldCommunittFeed(
    @graphql.Parent() parent: Media
  ): Promise<CommunityFeed | null> {
    const result = await this.service.getCommunittFeed(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
