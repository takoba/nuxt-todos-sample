import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Todos from '~/store/todos'

// eslint-disable-next-line import/no-mutable-exports
let todosStore: Todos

/**
 * ストアを初期化する（型推論できるモジュールとして取得する）
 * @param store Vuex.Store
 */
function initializeStore(store: Store<any>): void {
  todosStore = getModule(Todos, store)
}

export { initializeStore, todosStore }
