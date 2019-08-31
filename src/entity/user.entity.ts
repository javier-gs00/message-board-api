import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { Role } from './role.entity';
import { Post } from './post.entity';
import { Comment } from './comment.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar')
  firstName: string;

  @Column('varchar')
  lastName: string;

  @OneToMany(type => Post, post => post.user)
  posts: Post[];

  @OneToMany(type => Comment, comment => comment.user)
  comments: Comment[];

  @ManyToOne(type => Role, role => role.users)
  role: Role;

  @Column('int')
  roleId: number;
}
