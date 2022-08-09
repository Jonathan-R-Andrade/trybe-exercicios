import { Op, WhereOptions } from 'sequelize';
import { Post } from '../database/models';
import PostAttributes, { PostInput, PostSearchTerm }
  from '../database/interfaces/PostInterface';

class PostService {

  private _searchTermOptions(searchTerm: PostSearchTerm): WhereOptions<PostAttributes> {
    const options: WhereOptions<PostAttributes> = {};
    if (searchTerm.author) options.author = { [Op.like]: `%${searchTerm.author}%` };
    if (searchTerm.category) options.category = { [Op.like]: `%${searchTerm.category}%` }
    if (searchTerm.publicationDate) options
      .publicationDate = { [Op.eq]: new Date(searchTerm.publicationDate) }
    return options;
  }

  async getAll(): Promise<PostAttributes[]> {
    const posts = await Post.findAll();
    return posts;
  }

  async getById(id: number): Promise<PostAttributes> {
    const post = await Post.findByPk(id);
    if (!post) throw new Error('Not found');
    return post;
  }

  async create(post: PostInput): Promise<PostAttributes> {
    const createdPost = await Post.create(post);
    return createdPost;
  }

  async update(id: number, post: PostInput): Promise<PostAttributes> {
    const foundPost = await Post.findByPk(id);
    if (!foundPost) throw new Error('Not found');
    return await foundPost.update(post);
  }

  async delete(id: number): Promise<void> {
    const destroyedRows = await Post.destroy({ where: { id } });
    if (!destroyedRows) throw new Error('Not found');
  }

  async searchPosts(searchTerm: PostSearchTerm): Promise<PostAttributes[]> {
    const posts = await Post.findAll({ where: this._searchTermOptions(searchTerm) });
    return posts;
  }

}

export default new PostService();
