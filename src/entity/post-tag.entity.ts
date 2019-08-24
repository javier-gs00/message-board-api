import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Post } from './post.entity';
import { Tag } from './tag.entity';

@Entity()
export class PostsTags {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Post, post => post.postsTags)
  posts: Post[];

  @ManyToOne(type => Tag, tag => tag.postsTags)
  tags: Tag[];
}
