import { DataTypes, Model } from 'sequelize';
import PostAttributes, { PostInput } from '../interfaces/PostInterface';
import sequelize from '../sequelize';

class Post extends Model<PostAttributes, PostInput> implements PostAttributes {
  id!: number;
  title!: string;
  author!: string;
  category!: string;
  publicationDate!: Date;
}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true
  },
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  author: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  category: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  publicationDate: {
    type: DataTypes.DATE,
    allowNull: false,
  }
}, {
  tableName: 'Posts',
  sequelize,
  timestamps: false,
});

export default Post;
