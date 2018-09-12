<template>
    <ul class="sidebar">
        <li class="main-todo-selector"><a href="#" @click="showMainTodo">To-Do</a></li>
        <li class="generic-lists">Your Lists</li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-creator"><a href="#" @click="createList"><v-icon name="plus"></v-icon> Create a List</a></li>
    </ul>
</template>

<script>
import 'vue-awesome/icons/plus'
import Icon from 'vue-awesome/components/Icon'

export default {
  name: 'sidebar',
  data() {
    return {
      listName: 'List 1',
    };
  },
  components: {
      'v-icon': Icon,
  },
  methods: {
    showMainTodo() {

    },
    showSelectedList(listIndex) {

    },
    createList() {

    },
  },
};
</script>

<style scoped>
.sidebar {
    display: flex;
    flex-direction: column;
    width: 400px;
    list-style-type: none;
    padding: 20px 20px 20px 60px;
    text-align: end;
    background-color: var(--white);
}

.sidebar .main-todo-selector {
    font-size: 24px;
    color: var(--blue);
    font-weight: 700;
    font-family: var(--font-family-nunito);
    border-bottom: 1px solid var(--cloud-white);
    padding: 20px 0;
}

.sidebar .generic-lists {
    font-size: 20px;
    color: var(--black);
    font-family: var(--font-family-nunito);
    border-bottom: 1px solid var(--cloud-white);
    padding: 10px 0;
}

.sidebar .list-selector {
    font-size: 16px;
    color: var(--black);
    font-family: var(--font-family-nunito);
    padding: 5px 0;
}

.sidebar .list-creator {
    font-size: 16px;
    padding: 20px 0;
    border-top: 1px solid var(--cloud-white);
    font-family: var(--font-family-open-sans);
    font-weight: 100;
}
</style>
