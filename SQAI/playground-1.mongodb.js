/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use('MistakeReason');

// Find sample records with question content and human-AI conversation:
const records = db.getCollection('Mistake-Reason-Event').find({
    "题目内容": { $exists: true, $ne: null },
    "会话消息": { $regex: /human:.*AI:/ }
  }).limit(10);
  
//  const count = records.count();

// Print the selected records in json format:
console.log(records);

