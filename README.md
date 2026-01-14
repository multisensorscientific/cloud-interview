This coding challenge is designed to assess your ability to work with data processing and Node.js back-end development. Your implementation will be reviewed and discussed during the technical interview, where we'll explore your decisions, approach to performance, and problem-solving process.

## Requirements

- Node.js 24
- PNPM 10
- Docker

## Getting Started

Install dependencies:

```
pnpm install
```

Run MongoDB:
```
docker-compose up
```

Run the server:

```
pnpm start
```

## Tasks

* **Write a script to seed the database with the emissions in `fixtures/emissions.csv.gz`.** The script should read the gzipped file and save the data to a MongoDB collection efficiently.
* **Create a `GET` endpoint to query the seeded emissions data by siteId and equipmentId.** The endpoint should allow for querying based on a time range, and to filter by a confidence threshold.

Use your best judgement to implement a performant endpoint, and include validations and error handling.

### Additional Notes

* `equipment` belongs to `sites`. Sites typically have more than 1 equipment.
