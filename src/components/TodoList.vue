<template>
  <v-card class="mx-auto" max-width="500">
    <v-list>
      <v-list-item-group v-model="model">
        <v-list-item v-for="(item, i) in items" :key="i">
          <v-checkbox
            :input-value="item.completed"
            color="deep-purple accent-4"
          ></v-checkbox>
          <v-list-item-content>
            <v-list-item-title v-text="item.text"></v-list-item-title>
          </v-list-item-content>
          <v-list-item-icon>
            <v-icon v-text="'mdi-delete'"></v-icon>
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
        { text: 'First Todo', completed: false },
        { text: 'Second Todo', completed: false },
        { text: 'Third Todo', completed: false },
        { text: 'Fourth Todo', completed: false },
      ],
      model: 1,
    };
  },
};
</script>
