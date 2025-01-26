# MongoDB $inc Operator Error: Missing Field Handling

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations: the operation fails if the field to increment does not exist in the document.

The provided `bug.js` file showcases the incorrect implementation, while `bugSolution.js` offers a corrected approach using the `$setOnInsert` operator or conditional update.