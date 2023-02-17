import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { HelpersService } from 'src/helpers/helpers.service';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostsService {
  constructor(private prisma: PrismaService, private helper: HelpersService) {}

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findAll(includeAuthor: boolean | null = false) {
    return this.prisma.post.findMany({ include: { author: this.helper.getBoolean(includeAuthor) } });
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
