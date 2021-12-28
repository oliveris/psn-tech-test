# PSN Tech Test 
## API design in Node.js with Express, v3

A RESTful API to perform storage, deletion and search functionality.

### Project Setup

1. yarn insall 
2. yarn build 
3. yarn start

### Running tests

1. To run all tests `yarn test`
2. To run route tests `test-routes`
3. To run controller tests `test-controllers`
4. To run model tests `test-models`

### Notes from exercise
1. SQL file provided sets `title`, `date` and `channel_name` to nullable fields which seems odd when YouTube have these as mandatory fields
2. The SQL file also doesnt show the relationship one to many between `channel` and `video`
3. Naming on the columns could be improved:
    a. Naming a column `date` is not great practice as it is not difining anything about the data you are entering, would be better setting it to `published_at`
    b. Naming the column `channel_name` inside the `channels` table, could just call it `name` as we know we are already inside the `channels` table 