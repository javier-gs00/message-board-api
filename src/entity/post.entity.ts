import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';
import { PostsTags } from './post-tag.entity';
import { Comment } from './comment.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  title: string;

  @ManyToOne(type => User, user => user.posts)
  user: User;

  // Many To Many with tags
  @OneToMany(type => PostsTags, postsTags => postsTags.tags)
  postsTags: PostsTags[];

  @OneToMany(type => Comment, comment => comment.post)
  comments: Comment[];
}
