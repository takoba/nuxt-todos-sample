<template>
  <v-container>
    <h1>Todoリスト</h1>
    <v-row>
      <v-col cols="6">
        <ul>
          <li v-for="(todo, i) in todos" :key="i">
            <v-row justify="center" align="center">
              <v-col cols="1">
                <v-checkbox
                  :checked="todo.done"
                  @change="toggle(todo)"
                ></v-checkbox>
              </v-col>
              <v-col>
                <span :class="{ done: todo.done }">{{ todo.text }}</span>
              </v-col>
              <v-col cols="2">
                <v-btn small @click="remove(todo)">削除</v-btn>
              </v-col>
            </v-row>
          </li>
          <li>
            <v-text-field placeholder="Todo を入力" @keyup.enter="addTodo" />
          </li>
        </ul>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

import { Todo } from '~/models/Todo'
import { todosStore } from '~/store'

// OptionsAPI で記述
export default Vue.extend({
  computed: {
    todos(): Array<Todo> {
      return todosStore.todos
    }
  },
  methods: {
    addTodo(e): void {
      todosStore.add(e.target.value)
      e.target.value = ''
    },
    remove(todo: Todo) {
      todosStore.remove(todo)
    },
    toggle(todo: Todo) {
      todosStore.toggle(todo)
    }
  }
})
</script>

<style scoped lang="scss">
li {
  list-style: none;
  .done {
    text-decoration: line-through;
  }
}
</style>
