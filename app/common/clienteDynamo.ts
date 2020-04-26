import {DataMapper} from '@aws/dynamodb-data-mapper';
const DynamoDB = require('aws-sdk/clients/dynamodb');

export const client = new DynamoDB({region: 'eu-west-2'});
export const mapper = new DataMapper({client});