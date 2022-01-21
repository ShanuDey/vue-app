<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item v-for="item in items" :key="item.id">
          <v-checkbox
            :input-value="item.completed"
            color="deep-purple accent-4"
          ></v-checkbox>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon @click="deleteTodo(item.id)">mdi-delete</v-icon>
          </v-list-item-icon>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
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
    };
  },
  methods: {
    deleteTodo(id) {
      this.items = this.items.filter((todo) => todo.id !== id);
    },
  },
};
</script>
