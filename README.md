# PSN Tech Test 
## API design in Node.js with Express, v3

A RESTful API to perform storage, deletion and search functionality.

### Project Setup

1. Open a new terminal and cd into the project then start mongo db by running `mongo`
2. Open another terminal and cd into the project then run the following:
    a. `yarn insall`
    b. `yarn build`
    c. `yarn start`

### Running the code

For the perpose of this tech test I have used Postman client to send the REST API requests.
I have provided the export file `psn-tech-test.postman_collection.json` so you can easily import the collection to run the code.
In the collection you will find 3 endpoints:
1. Gets a list of all videos
2. Creates Videos
3. Gets a single video
4. Deletes a Video

### Running tests

1. To run all tests `yarn test`
2. To run independently route tests `test-routes`
3. To run independently controller tests `test-controllers`
4. To run independently model tests `test-models`

### Notes from exercise

1. SQL file provided sets `title`, `date` and `channel_name` to nullable fields which seems odd when YouTube have these as mandatory fields
2. The SQL file also doesnt show the relationship one to many between `channel` and `video`
3. Naming on the columns could be improved:
    a. Naming a column `date` is not great practice as it is not difining anything about the data you are entering, would be better setting it to `published_at`
    b. Naming the column `channel_name` inside the `channels` table, could just call it `name` as we know we are already inside the `channels` table 
4. Couldn't find a better way to batch these YouTube API calls to minimise the amount of requests being sent

### Improvments
1. Add more thorough testing on the video controller methods
2. Add checks to not add duplicate data when storing videos/channels from Youtube
3. Doc blocks formatting
4. Eagerloading other relationship data
