import { Optional } from "sequelize/types";

export default interface PostAttributes {
  id: number,
  title: string,
  author: string,
  category: string,
  publicationDate: Date
}

export interface PostInput extends Omit<PostAttributes, 'id'> { };

export interface PostSearchTerm extends Optional<
  Omit<PostInput, 'title'>,
  'author' | 'category' | 'publicationDate'
> { };
