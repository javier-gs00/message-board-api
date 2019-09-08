import { Injectable } from '@nestjs/common';
import { Repository, Connection, getConnection } from 'typeorm';
import { Post } from '../entity/post.entity';

@Injectable()
export class PostRepository {
  postRepository: Repository<Post>;

  constructor(connection: Connection) {
    this.postRepository = connection.getRepository(Post);
  }

  async create(title: string, userId: number): Promise<any> {
    // const post = await getConnection()
    //   .createQueryBuilder()
    //   .insert()
    //   .into(Post)
    //   .values([{ title, userId }])
    //   .execute();
    // return post;

    const post = this.postRepository.create({ title, userId });
    return this.postRepository.save(post);
  }
}
