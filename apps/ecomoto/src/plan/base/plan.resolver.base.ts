/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { Public } from "../../decorators/public.decorator";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { CreatePlanArgs } from "./CreatePlanArgs";
import { UpdatePlanArgs } from "./UpdatePlanArgs";
import { DeletePlanArgs } from "./DeletePlanArgs";
import { PlanCountArgs } from "./PlanCountArgs";
import { PlanFindManyArgs } from "./PlanFindManyArgs";
import { PlanFindUniqueArgs } from "./PlanFindUniqueArgs";
import { Plan } from "./Plan";
import { RentalFindManyArgs } from "../../rental/base/RentalFindManyArgs";
import { Rental } from "../../rental/base/Rental";
import { PlanService } from "../plan.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Plan)
export class PlanResolverBase {
  constructor(
    protected readonly service: PlanService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @Public()
  @graphql.Query(() => MetaQueryPayload)
  async _plansMeta(
    @graphql.Args() args: PlanCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @Public()
  @graphql.Query(() => [Plan])
  async plans(@graphql.Args() args: PlanFindManyArgs): Promise<Plan[]> {
    return this.service.findMany(args);
  }

  @Public()
  @graphql.Query(() => Plan, { nullable: true })
  async plan(@graphql.Args() args: PlanFindUniqueArgs): Promise<Plan | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "create",
    possession: "any",
  })
  async createPlan(@graphql.Args() args: CreatePlanArgs): Promise<Plan> {
    return await this.service.create({
      ...args,
      data: args.data,
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "update",
    possession: "any",
  })
  async updatePlan(@graphql.Args() args: UpdatePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.update({
        ...args,
        data: args.data,
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => Plan)
  @nestAccessControl.UseRoles({
    resource: "Plan",
    action: "delete",
    possession: "any",
  })
  async deletePlan(@graphql.Args() args: DeletePlanArgs): Promise<Plan | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [Rental], { name: "rentals" })
  @nestAccessControl.UseRoles({
    resource: "Rental",
    action: "read",
    possession: "any",
  })
  async resolveFieldRentals(
    @graphql.Parent() parent: Plan,
    @graphql.Args() args: RentalFindManyArgs
  ): Promise<Rental[]> {
    const results = await this.service.findRentals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
