import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateKworkDto } from './dto/create-kwork.dto';
import { UpdateKworkDto } from './dto/update-kwork.dto';

@Injectable()
export class KworkService {
  constructor(private prisma: PrismaService) {}

  async create(createKworkDto: CreateKworkDto) {
    const newKwork = await this.prisma.project.create({
      data: createKworkDto,
    });
    return newKwork;
  }

  async findAll() {
    return this.prisma.project.findMany();
  }

  async findOne(id: number) {
    const project = await this.prisma.project.findUnique({
      where: { id },
    });

    if (!project) {
      throw new Error('Project not found');
    }

    return project;
  }

  async update(id: number, updateKworkDto: UpdateKworkDto) {
    return this.prisma.project.update({
      where: { id },
      data: updateKworkDto,
    });
  }

  async remove(id: number) {
    return this.prisma.project.delete({
      where: { id },
    });
  }

  async countByStatus() {
    const statuses = ['new', 'reason', 'favorite'] as const;

    const counts = await Promise.all(
      statuses.map((status) =>
        this.prisma.project.count({ where: { status } })
      )
    );

    return {
      new: counts[0],
      reason: counts[1],
      favorite: counts[2],
    };
  }

}
