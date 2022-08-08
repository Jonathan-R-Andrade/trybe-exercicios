import { DataTypes, Model } from 'sequelize';
import sequelize from '../sequelize';

export interface PostAttributes {
  id: number,
  title: string,
  author: string,
  category: string,
  publicationDate: Date
}

export interface PostInput extends Omit<PostAttributes, 'id'> { };

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
