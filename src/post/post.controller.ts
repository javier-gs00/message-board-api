import { Controller, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostBody } from './dto/create-post-body.dto';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  async createPost(@Body() createPostBodyDto: CreatePostBody) {
    const savedPost = await this.postService.save(
      createPostBodyDto.title,
      createPostBodyDto.userId,
    );

    return savedPost;
  }
}
