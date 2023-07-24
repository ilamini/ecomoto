/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, CarImage, Car } from "@prisma/client";

export class CarImageServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.CarImageCountArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageCountArgs>
  ): Promise<number> {
    return this.prisma.carImage.count(args);
  }

  async findMany<T extends Prisma.CarImageFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageFindManyArgs>
  ): Promise<CarImage[]> {
    return this.prisma.carImage.findMany(args);
  }
  async findOne<T extends Prisma.CarImageFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageFindUniqueArgs>
  ): Promise<CarImage | null> {
    return this.prisma.carImage.findUnique(args);
  }
  async create<T extends Prisma.CarImageCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageCreateArgs>
  ): Promise<CarImage> {
    return this.prisma.carImage.create<T>(args);
  }
  async update<T extends Prisma.CarImageUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageUpdateArgs>
  ): Promise<CarImage> {
    return this.prisma.carImage.update<T>(args);
  }
  async delete<T extends Prisma.CarImageDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.CarImageDeleteArgs>
  ): Promise<CarImage> {
    return this.prisma.carImage.delete(args);
  }

  async getCarId(parentId: string): Promise<Car | null> {
    return this.prisma.carImage
      .findUnique({
        where: { id: parentId },
      })
      .carId();
  }
}