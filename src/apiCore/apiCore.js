// import { REACT_APP_GITLAB_API_URL, REACT_APP_GITLAB_API_PRIVATE_KEY } from '../config';
// const AWS = require('aws-sdk');
// AWS.config.update({
//     region: 'us-east-2',
//     endpoint: 'http://dynamodb.us-east-2.amazonaws.com',
//     accessKeyId: 'AKIAWMOIGXNTN5UMZK5K',
//     secretAccessKey: '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'
// });
// const dynamodb = new AWS.DynamoDB.DocumentClient()

// export const getMostRecentEvents = async () => {
//     return fetch(`${REACT_APP_GITLAB_API_URL}/mostRecent`, {
//         method: "GET",
//         headers: {
//             Accept: "application/json",
//             "Content-Type": "application/json",
//         }
//     })
//         .then(response => {
//             return response.json()
//         })
//         .catch(err => console.log(err));
// };
// export const getMostRecentEvents = async (req, res) => {
//     const params = {
//         TableName: 'events',
//         KeyConditionExpression: '#author_id = :author_id',
//         ExpressionAttributeNames: {
//             '#author_id': 'author_id'
//         },
//         ExpressionAttributeValues: {
//             ':author_id': 40
//         },
//         ScanIndexForward: false,
//         Limit: 1
//     };
//     try {
//         await dynamodb.query(params, function(err, data) {
//             if (err) console.log('Error: ',  err, err.stack);
//             else console.log(data);
//             const body = {
//                 events: data
//             };
//             res.json(body);
//         });
//     } catch (error) {
//         console.error('Do your custom error handling here. I am just ganna log it out: ', error);
//     }
// }