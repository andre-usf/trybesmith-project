import { ValidationError } from 'joi';

export default (error: ValidationError)
: { message: string } => ({ message: error.details[0].message });