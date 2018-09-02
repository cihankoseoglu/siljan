<template>
    <ul class="sidebar">
        <li class="main-todo-selector"><a href="#" @click="showMainTodo">To-Do</a></li>
        <li class="generic-lists">Your Lists</li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
        <li class="list-selector"><a href="#" @click="showSelectedList(listIndex)">{{ listName }}</a></li>
    </ul>
</template>

<script>
export default {
  name: 'sidebar',
  data() {
      return {
          listName: 'List 1',
      }
  },
  methods: {
      showMainTodo() {

      },
      showSelectedList(listIndex) {

      },
  }
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
    padding: 20px;
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

</style>
