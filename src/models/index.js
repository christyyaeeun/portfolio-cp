// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Contact, Project } = initSchema(schema);

export {
  Contact,
  Project
};