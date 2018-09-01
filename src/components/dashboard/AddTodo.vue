<template>
    <div class="add-todo">
        <form @submit.prevent="addTodoItem">
            <input type="text" v-model="item" name="todoItem" autocomplete="off" placeholder="Enter a todo item">
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
          item: "item",
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
    margin: 10px 0;
    border-bottom: 1px solid var(--cloud-white);
}

.add-todo input {
    border: none;
    color: var(--black);
    text-align: center;
    font-size: 32px;
    font-family: var(--font-family-open-sans);
}

.add-todo input[type=text] {
    height: 40px;
    font-size: 32px;
    width: 500px;
    box-sizing: border-box;
    font-family: var(--font-family-nunito);
    font-weight: 200;
}

.add-todo input[type=text]:focus {
    outline: 0;
}

.add-todo input::placeholder {
    opacity: 1;
    transition: opacity .2s;
    font-weight: 200;
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
    padding: 20px;
}

</style>
