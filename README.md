# Haddock technical test

## Install and run the `api`

```bash
cd haddock-api
npm i && npm run tsc && npm run start

```

> By default the local back server is displayed at http://localhost:3000

<br />
<br />

## Test

curl -d '{ "order": [ { "number":12, "quantity": 4 }, { "number":21, "quantity": 2 } ] }' -H "Content-Type: application/json" -X POST http://localhost:3000/order

## Memory

For this test I have decided to create just one api in Node with Express and Type Script, with a hexagonal architecture or design pattern.

The estructure is the next one:

src/
|-- order/
| |-- application/ ----------------------------->The bridge between the domain layer and the infrastructure layer
| | |-- index.ts
| | |-- orderUseCase.ts
| |-- domain/ ---------------------------------->Where is all the logic
| | |-- discount/
| | | |-- tests/
| | | | |-- mocks/
| | | | |-- discount.service.spec.ts
| | | |-- discount.entity.ts
| | | |-- discount.respository.ts
| | | |-- discount.service.ts
| | |-- order/
| | | |-- tests/
| | | | |-- mocks/
| | | | |-- order.service.spec.ts
| | | |-- order.entity.ts
| | | |-- order.respository.ts
| | | |-- order.service.ts
| |-- infraestructure/-------------------------->The entry and exit point
| | |-- controllers/
| | | |-- orders.ctrl.ts
| | |-- middlewares/
| | | |-- routingValidations.middleware.ts
| | |-- repository/
| | | |-- discount/
| | | | |-- discount.datasource.ts
| | | | |-- discount.json
| | | |-- order/
| | | | |-- order.datasource.ts
| | | | |-- products.json
| | |-- route/
| | | |-- orders.route.ts
| | |-- utils/
| | | |-- ordersValidatorsChain.ts
|-- index.ts
