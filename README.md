# Prueba técnica Haddock

## Instalación y ejecución de la `api`

```bash
cd haddock-api
npm i && npm run tsc && npm run start

```

> Por defecto el servidor local de back se despliega en http://localhost:3000

<br />
<br />

## Test

curl -d '{ "order": [ { "number":12, "quantity": 4 }, { "number":21, "quantity": 2 } ] }' -H "Content-Type: application/json" -X POST http://localhost:3000/order

## Memoria

Para esta prueba he decidido crear tan solo una api en Node con Express y Type Script, con una arquitectura o patrón de diseño hexagonal.

La estructura es la siguiente:

src/
|-- order/
| |-- application/
| | |-- index.ts
| | |-- orderUseCase.ts
| |-- domain/
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
| |-- infraestructure/
| | |-- controllers/
| | | |-- orders.ctrl.ts
| | |-- repository/
| | | |-- discount/
| | | | |-- discount.datasource.ts
| | | | |-- discount.json
| | | |-- order/
| | | | |-- order.datasource.ts
| | | | |-- products.json
| | |-- route/
| | | |-- orders.route.ts
|-- index.ts
