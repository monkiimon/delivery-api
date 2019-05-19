# Delivery Calculate API

Delivery Calculate API for Delivery Calculate Client

### Installation

Requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and start the server.

```sh
$ npm install
or
$ yarn
```

### Run in Development Mode

```sh
$ npm run dev
or
$ yarn dev
```

### API Endpoint

| API             | END POINT                                      |
| --------------- | ---------------------------------------------- |
| Routes Cost     | http://localhost:9000/api/v1/delivery/cost     |
| Possible Routes | http://localhost:9000/api/v1/delivery/possible |

### Test API Endpoint

Routes Cost\
http://localhost:9000/api/v1/delivery/cost \
by http POST method with body\
example body

```
{
  "route": "E-A-C-F"
}
```

Possible Routes\
http://localhost:9000/api/v1/delivery/possible \
by http POST method with body\
example body

```
{
	"start": "E",
	"end": "D",
	"maxRoutes": 4
}
```
