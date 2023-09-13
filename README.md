## Person

This is a simple REST API capable of CRUD operations on a "person" resource, built as a second stage project from <a href="https://internship.zuri.team/hngi9">HNG Internship</a>.

## Product Requirements

The api should be able to

 1. Add a new person.
 2. Fetch details of a person.
 3. Modify details of an existing person
 4. Remove a person 



### Set up

- Install [Node.js](https://nodejs.org/en/download/), [MongoDB](https://www.mongodb.com/docs/manual/installation/)
- clone this repo
- Install project dependencies using `npm install`
- update env with example.env
- run the program


#### How to clone this repo

```sh
git clone https://github.com/adeyinkaoresanya/hng_s2t_person.git
```

#### Install project dependencies

```sh
npm install
```

#### Update .env with example.env

#### Run a development server

```sh
npm run start:dev
```

### Model

#### User
| field        | data_type  | constraints       |
|--------------|------------|-------------------|
|  name        | string     |  required         |
|  email       | string     |  required         |
|  createdAt   |  date      |  optional         |
|  updatedAt   |  date      |  optional         |




## Usage

### Creating a user

- Route: /api
- Method: POST
- Body

```json
{
"name": "Jane Bakes",
"email": "janebakes@gmail.com",

}
```

Response

```json
{
  "message": {
    "name": "Jane Bakes",
    "email": "janebakes@gmail.com",
    "_id": "6501b160128bfe7289a2f17f",
    "createdAt": "2023-09-13T12:56:00.735Z",
    "__v": 0
  }
}

```


### Fetching a user

- Route: /api/user_id
- Method: GET


Response

```json
{
  "message": {
    "_id": "6501b160128bfe7289a2f17f",
    "name": "Jane Bakes",
    "email": "janebakes@gmail.com",
    "createdAt": "2023-09-13T12:56:00.735Z",
    "__v": 0
  }
}

```

### Update a user's details

- Route: /api/user_id
- Method: PUT

Request [Body]

```json
{
  "email":"janestone@gmail.com"}

```

Response

```json
{
  "message": {
    "_id": "6501b160128bfe7289a2f17f",
    "name": "Jane Bakes",
    "email": "janestone@gmail.com",
    "createdAt": "2023-09-13T12:56:00.735Z",
    "__v": 0,
    "updatedAt": "2023-09-13T12:59:08.113Z"
  }
}
```



---



### delete a user

- Route: /api/user_id
- Method: DELETE

Response

```json
{
   "message": "User has been deleted successfully" 
  
}
  
```


---


## Author
- Adeyinka Oresanya