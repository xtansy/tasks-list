/**
* ⚠️ FSD
*
* Its hack way to export redux infering types from @/app
* and use it in @/shared/model/hooks.ts
*/

type RootState = import('./app/store').RootState
type AppDispatch = import('./app/store').AppDispatch