# PSN Tech Test 
## API design in Node.js with Express, v3

A RESTful API to perform create, read, deletion and search functionality.

### Project Setup

1. Install Node and Mongo onto your machine if not already 
2. Open a new terminal and cd into the project then start mongo db by running `mongo`
3. Open another terminal and cd into the project then run the following:
    1. `yarn install`
    2. `yarn build`
    3. `yarn start`

### Running the code

For the purpose of this tech test I have used Postman client to send the REST API requests.
I have provided the export file `psn-tech-test.postman_collection.json` so you can easily import the collection to run the code.
In the collection you will find 5 endpoints:
1. `Task 1a: Creates Videos`
2. `Task 1b: Gets a list of all videos`
3. `Task 2: Gets a video` (Set the {video} path param as an _id value obtained in the previous list query)
4. `Task 3: Deletes a Video` (Set the {video} path param as the same value used in the above query) - 204 No Content is returned for successful deletion
5. `Task 4: Gets a filtered list of videos` (Filtering is done by the title query param which looks for an exact match on video title)

### Running tests

1. To run all tests `yarn test`
2. To run independently route tests `test-routes`
3. To run independently controller tests `test-controllers`
4. To run independently model tests `test-models`

### Notes from exercise

1. SQL file provided sets `title`, `date` and `channel_name` to nullable fields which seems odd when YouTube have these as mandatory fields
2. The SQL file also doesnt show the relationship one to many between `channel` and `video`
3. Naming on the columns could be improved:
    1. Naming a column `date` is not great practice as it is not difining anything about the data you are entering, would be better setting it to `published_at`
    2. Naming the column `channel_name` inside the `channels` table, could just call it `name` as we know we are already inside the `channels` table 
4. Couldn't find a better way to batch these YouTube API calls to minimise the amount of requests being sent

### Improvments
1. Add more thorough testing on the video controller methods
2. Add checks to not add duplicate data when storing videos/channels from Youtube
3. Doc blocks formatting
4. Eagerloading other relationship data
