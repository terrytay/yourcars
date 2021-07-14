# Yourcars

## Introduction

This app is a full stack application that allows people to rent cars. It is a sample app for learning, and hence, the .env files are left there on purpose.

The stack used includes Create React App, Nestjs, GraphQL, Tailwind, Docker, Docker Compose etc.


## Getting Started

Prerequisites:
  - Docker
  - Docker Compose
  
To run this app on your local machine, just clone this repository and run
```sh
 docker-compose build && docker-compose up
 ```
 
 Access to the website is then at `http://localhost`
 
## Troubleshooting

`Port 5432 in used`

1. Change `DB_PORT=5432` to `DB_PORT=5431` in the `.env` files located in `/nestjs-cars-app`.
2. In the root folder, change line 9 `- 5432:5432` to `- 5431:5431`

## Deployment

This stack works well on any VPS hosting. Not supported in static site hosting such as Netlify and Vercel.
