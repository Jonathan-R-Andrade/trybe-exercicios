import { Post } from '../database/models';
import { PostInput, PostSearchTerm } from '../database/interfaces/PostInterface';
import { badRequest } from '../errors/httpErrors';
import Joi from 'joi';
import moment from 'moment';

class PostValidations {

  private _minAuthorSize = 3;
  private _minCategorySize = 3;
  private _invalidDateMessage =
    '"publicationDate" must be a valid date in YYYY-MM-DD format';

  private _validate(data: any, schema: Joi.ObjectSchema) {
    const { error } = schema.validate(data);
    if (error) throw badRequest(error.message);
  }

  private _validateDate(value: string, helpers: any) {
    if (moment(value, 'YYYY-MM-DD', true).isValid()) return value;
    return helpers.error('any.invalid');
  }

  public validateUpdateData(updateData: PostInput): void {
    const schema = Joi.object({
      title: Joi.string().not().empty(),
      author: Joi.string().min(this._minAuthorSize),
      category: Joi.string().min(this._minCategorySize),
      publicationDate: Joi.custom(this._validateDate)
        .message(this._invalidDateMessage),
    }).required().min(1).label('Update Data');
    this._validate(updateData, schema);
  }

  public validatePostData(post: Post): void {
    const schema = Joi.object({
      title: Joi.string().required().not().empty(),
      author: Joi.string().required().min(this._minAuthorSize),
      category: Joi.string().required().min(this._minCategorySize),
      publicationDate: Joi.required().custom(this._validateDate)
        .message(this._invalidDateMessage),
    }).required().label('Post');
    this._validate(post, schema);
  }

  public validateSearchTerm(searchTerm: PostSearchTerm): void {
    const schema = Joi.object({
      author: Joi.string().not().empty(),
      category: Joi.string().not().empty(),
      publicationDate: Joi.custom(this._validateDate)
        .message(this._invalidDateMessage),
    }).required().label('Search Term');
    this._validate(searchTerm, schema);
  }

}

export default new PostValidations();
