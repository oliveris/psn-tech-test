# PSN Tech Test 
## API design in Node.js with Express, v3

A RESTful API to perform storage, deletion and search functionality.

### Project Setup

1. yarn insall 
2. yarn build 
3. yarn start

### Running tests

1. 

### Notes from exercise
1. SQL file provided sets `title` and `date` to nullable fields which seems odd
2. The SQL file describes the `date` field as `date` but the tech test describes it as `publishedAt` (For this exercise I have named the field `publishedAt` because it is more descriptive than just `date`)
3. The SQL file also doesnt show the relationship one to many between `channel` and `video`