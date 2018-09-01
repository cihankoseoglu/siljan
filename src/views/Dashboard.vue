<template>
    <div class="dashboard">
        <Navbar></Navbar>
        <div class="add-todo">
            <AddTodo></AddTodo>
        </div>
        <div class="panel">
            <Sidebar></Sidebar>
            <TodoList></TodoList>
        </div>
    </div>
</template>

<script>
import Navbar from '../components/navbar/Navbar.vue';
import AddTodo from '../components/dashboard/AddTodo.vue';
import Sidebar from '../components/Sidebar.vue';
import TodoList from '../components/dashboard/TodoList.vue';

export default {
  name: 'dashboard',
  components: {
      Navbar,
      AddTodo,
      Sidebar,
      TodoList,
  },
};
</script>

<style scoped>
.dashboard {
    margin: 0;
    padding: 0;
}

.dashboard .add-todo {
    margin: 40px auto;
}

.dashboard .panel {
    display: flex;
    flex-direction: row;
    margin-top: 100px;
}

</style>
