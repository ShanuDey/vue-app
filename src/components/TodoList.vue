<template>
  <div>
    <v-text-field
      outlined
      label="Add Todo"
      append-icon="mdi-plus"
      v-model="newTodoText"
      @click:append="addTodo"
      @keydown.enter="addTodo"
    ></v-text-field>
    <v-card class="mx-auto" max-width="500" v-if="items.length !== 0">
      <v-list>
        <v-list-item-group v-model="model">
          <v-list-item
            v-for="item in items"
            :key="item.id"
            :color="item.completed ? 'primary' : ''"
          >
            <v-checkbox
              :input-value="item.completed"
              @click="toggleCompleted(item.id)"
              color="primary accent-4"
            ></v-checkbox>
            <v-list-item-content>
              <v-list-item-title
                :class="
                  item.completed ? 'text-decoration-line-through' : 'body-1'
                "
                v-text="item.text"
              ></v-list-item-title>
            </v-list-item-content>
            <v-list-item-icon>
              <v-icon @click="deleteTodo(item.id)">mdi-delete</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-card>
    <div class="no-task" v-else>No task present</div>
  </div>
</template>

<script>
import { v4 as uuidv4 } from 'uuid';
import store from '../store';

export default {
  data() {
    return {
      items: [
        { id: 1, text: 'First Todo', completed: false },
        { id: 2, text: 'Second Todo', completed: false },
        { id: 3, text: 'Third Todo', completed: false },
        { id: 4, text: 'Fourth Todo', completed: false },
      ],
      model: 1,
      newTodoText: '',
    };
  },
  methods: {
    deleteTodo(id) {
      this.items = this.items.filter((todo) => todo.id !== id);
      store.dispatch('displaySnackbar', 'Todo Deleted');
    },
    toggleCompleted(id) {
      let updatedTodo = this.items.find((todo) => todo.id === id);
      updatedTodo.completed = !updatedTodo.completed;
      store.dispatch(
        'displaySnackbar',
        updatedTodo.completed ? 'Todo Completed' : 'Todo Incomplete'
      );
    },
    addTodo() {
      if (this.newTodoText !== '') {
        this.items.push({
          id: uuidv4(),
          text: this.newTodoText,
          completed: false,
        });
        this.newTodoText = '';
        store.dispatch('displaySnackbar', 'Todo Added');
      } else {
        store.dispatch('displaySnackbar', 'Todo is Empty');
      }
    },
  },
};
</script>

<style scoped>
.no-task {
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
</style>
