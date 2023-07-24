/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, Rental, Car, Escrow, User, Plan } from "@prisma/client";

export class RentalServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.RentalCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalCountArgs>
  ): Promise<number> {
    return this.prisma.rental.count(args);
  }

  async findMany<T extends Prisma.RentalFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalFindManyArgs>
  ): Promise<Rental[]> {
    return this.prisma.rental.findMany(args);
  }
  async findOne<T extends Prisma.RentalFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalFindUniqueArgs>
  ): Promise<Rental | null> {
    return this.prisma.rental.findUnique(args);
  }
  async create<T extends Prisma.RentalCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalCreateArgs>
  ): Promise<Rental> {
    return this.prisma.rental.create<T>(args);
  }
  async update<T extends Prisma.RentalUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalUpdateArgs>
  ): Promise<Rental> {
    return this.prisma.rental.update<T>(args);
  }
  async delete<T extends Prisma.RentalDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.RentalDeleteArgs>
  ): Promise<Rental> {
    return this.prisma.rental.delete(args);
  }

  async getCarId(parentId: string): Promise<Car | null> {
    return this.prisma.rental
      .findUnique({
        where: { id: parentId },
      })
      .carId();
  }

  async getEscrows(parentId: string): Promise<Escrow | null> {
    return this.prisma.rental
      .findUnique({
        where: { id: parentId },
      })
      .escrows();
  }

  async getLesseeId(parentId: string): Promise<User | null> {
    return this.prisma.rental
      .findUnique({
        where: { id: parentId },
      })
      .lesseeId();
  }

  async getPlanId(parentId: string): Promise<Plan | null> {
    return this.prisma.rental
      .findUnique({
        where: { id: parentId },
      })
      .planId();
  }
}