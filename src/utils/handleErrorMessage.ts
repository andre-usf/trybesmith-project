import { ValidationError } from 'joi';
import { IErrorMessage } from '../interfaces';

export default (error: ValidationError)
: IErrorMessage => ({ message: error.details[0].message });