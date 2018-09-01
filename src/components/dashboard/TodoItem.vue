<template>
    <li class="todo-item">
        <button class="check-button" @click="checkTodoItem"></button>
        <form @submit.prevent="editTodoItem">
            <input type="text" v-model="item" name="todoItem">
        </form>
        <ul>
            <li class="priority"></li>
            <li class="priority"></li>
            <li class="priority"></li>
        </ul>
    </li>
</template>

<script>
export default {
  name: 'todoitem',
  data() {
      return {
          item: "item",
      }
  },
  methods: {
      checkTodoItem() {

      },
      editTodoItem() {

      }
  }
};
</script>

<style scoped>
.todo-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    margin: 10px 0;
    border-bottom: 1px solid var(--cloud-white);
}

.todo-item button {
    cursor: pointer;
    border: 1px solid var(--cloud-white);
    border-radius: 50%;
    background-color: var(--white);
    transition: .2s;
    width: 50px;
    height: 50px;
}

.todo-item button:focus {
    outline: 0;
    transition: .2s;
    background-color: var(--dark-green);
}

.todo-item button:hover {
    background-color: var(--green);
    transition: .2s;
}

.todo-item input {
    border: none;
    color: var(--black);
    padding-left: 10px;
    margin-left: 10px;
    font-size: 14px;
    font-family: var(--font-family-open-sans);
}

.todo-item input[type=text],
.todo-item input[type=password] {
    height: 40px;
    font-size: 16px;
    width: 300px;
    box-sizing: border-box;
    font-family: var(--font-family-nunito);
    font-weight: 100;
}

.todo-item input[type=text]:focus,
.todo-item input[type=password]:focus {
    outline: 0;
}

.todo-item input::placeholder {
    opacity: 1;
    transition: opacity .2s;
    padding: 10px;
    font-weight: 100;
    color: var(--light-gray);
}

.todo-item input:focus::placeholder {
    opacity: 0;
}

.todo-item ul {
    list-style-type: none;
}

.todo-item ul .priority {

}

</style>
