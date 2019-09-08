import { Injectable } from '@nestjs/common';
import { PostRepository } from '../../repository/post.repository';

@Injectable()
export class PostService {
  constructor(
    private readonly postRepository: PostRepository, // @InjectRepository(Post) // private readonly postRepository: Repository<Post>,
  ) {}

  async save(title: string, userId: number): Promise<any> {
    return this.postRepository.create(title, userId);
  }
}
