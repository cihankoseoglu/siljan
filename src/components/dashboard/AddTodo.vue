<template>
    <div class="add-todo">
        <form @submit.prevent="addTodoItem">
            <input type="text" v-model="item" name="todoItem" autocomplete="off" placeholder="Enter a todo item...">
        </form>
        <ul>
            <li class="priority">HI</li>
            <li class="priority">MED</li>
            <li class="priority">LO</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'addtodo',
  data() {
      return {
          item: "",
      }
  },
  methods: {
      addTodoItem() {

      }
  }
};
</script>

<style scoped>
.add-todo {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 500px;
    margin: 60px 0;
}

.add-todo input {
    height: 40px;
    font-size: 32px;
    width: 500px;
    border: none;
    color: var(--black);
    text-align: center;
    font-size: 32px;
    font-family: var(--font-family-open-sans);
    border-bottom: 1px solid var(--cloud-white);
    background-color: var(--blue);
    color: var(--white);
    font-weight: 300;
    box-sizing: border-box;
    padding-bottom: 10px;
}

.add-todo input[type=text]:focus {
    outline: 0;
}

.add-todo input::placeholder {
    opacity: 0.7;
    transition: opacity .2s;
    font-weight: 300;
    text-align: center;
    color: var(--light-gray);
}

.add-todo input:focus::placeholder {
    opacity: 0;
}

.add-todo ul {
    list-style-type: none;
    display: flex;
    flex-direction: row;
}

.add-todo ul .priority {
    padding: 20px 40px 0 0;
}

</style>
