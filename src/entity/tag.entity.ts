import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { PostsTags } from './post-tag.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  name: string;

  // Many To Many with posts
  @OneToMany(type => PostsTags, postsTags => postsTags.posts)
  postsTags: PostsTags[];
}
