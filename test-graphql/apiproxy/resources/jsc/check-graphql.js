'use strict';

const allowedTypes = context.getVariable('verifyapikey.VA-restrictAccess.apiproduct.GraphQLAllowedTypes');
const selectionSet= context.getVariable('graphql.operation.selectionSet.1.name');
if(!allowedTypes){
  context.setVariable('GraphQLAllowed', 'false');
  context.setVariable('GraphQLStatus','Cannot  find GraphQLAllowedTypes');
} else if (!selectionSet){
  context.setVariable('GraphQLAllowed', 'false');
  context.setVariable('GraphQLStatus', 'Cannot find selection set 1');
} else {
  const allowed = allowedTypes.split(',');
  if (allowed.find(at => at === selectionSet)){
    context.setVariable('GraphQLAllowed', 'true');
  } else {
    context.setVariable('GraphQLAllowed', 'false');
  }
}
