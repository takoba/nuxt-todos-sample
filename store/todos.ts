import { Module, VuexModule, Mutation } from 'vuex-module-decorators'
import { Todo } from '~/models/Todo'

@Module({
  stateFactory: true,
  namespaced: true,
  name: 'todos'
})
export default class Todos extends VuexModule {
  todos: Todo[] = []

  /**
   * Todoを追加する
   * @param text Todoテキスト
   */
  @Mutation
  add(text: string) {
    const todos: Todo[] = this.todos
    const todo: Todo = {
      id: todos.length === 0 ? 0 : todos[todos.length - 1].id + 1,
      text,
      done: false
    }
    this.todos.push(todo)
  }

  /**
   * Todoを削除する
   * @param todo 削除するTodoインスタンス
   */
  @Mutation
  remove(todo: Todo) {
    this.todos.splice(this.todos.indexOf(todo), 1)
  }

  /**
   * Todoのdoneのon/offを切り替える
   * @param todo doneのon/offを切り替えるTodoインスタンス
   */
  @Mutation
  toggle(todo: Todo) {
    todo.done = !todo.done
  }
}
