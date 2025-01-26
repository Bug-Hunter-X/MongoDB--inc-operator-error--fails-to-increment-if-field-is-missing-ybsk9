```javascript
// Solution 1: Using $setOnInsert
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"counter": 1}, "$setOnInsert": {"counter": 0}});

// Solution 2: Using a conditional update
db.collection('myCollection').updateOne({"_id": ObjectId("651234567890")}, {"$inc": {"counter": 1}}, {upsert: true});
```