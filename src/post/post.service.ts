import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from '../entity/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepository: Repository<Post>,
  ) {}

  async save(title: string, userId: number): Promise<Post> {
    const post = this.postRepository.create({
      title,
      userId,
    });
    const savedPost = await this.postRepository.save(post);

    return savedPost;
  }
}
