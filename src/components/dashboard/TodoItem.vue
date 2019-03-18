<template>
    <li class="todo-item">
        <button class="check-button" @click="checkTodoItem"><v-icon name="check" /></button>
        <form @submit.prevent="editTodoItem">
            <input
              type="text"
              v-on-clickaway="blurOnDOM"
              @focus="focusOnDOM"
              @mouseover="onHover = true"
              @mouseleave="onHover = false"
              v-model.lazy="task"
              name="todoItem"
              autocomplete="off"
              ref="todoItem"
            >
        </form>
        <ul v-show="onFocus">
            <li class="priority">HI</li>
            <li class="priority">MED</li>
            <li class="priority">LO</li>
        </ul>
    </li>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway';
import 'vue-awesome/icons/check';
import Icon from 'vue-awesome/components/Icon';

export default {
  mixins: [clickaway],
  name: 'todoitem',
  components: {
    'v-icon': Icon,
  },
  data() {
    return {
      item: 'Check out Spiderman',
      onFocus: false,
      onHover: false,
    };
  },
  props: ['task'],
  methods: {
    checkTodoItem() {

    },
    editTodoItem() {

    },
    focusOnDOM() {
      if (!this.onFocus) {
        this.onFocus = true;
        this.$nextTick(() => {
          this.$refs.todoItem.focus();
        });
      }
    },
    blurOnDOM() {
      if (this.onFocus) {
        this.onFocus = false;
      }
    },
  },
};
</script>

<style scoped>
.todo-item {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 400px;
    height: 60px;
    margin: 20px 0;
    box-sizing: border-box;
}

.todo-item button {
  position: relative;
  vertical-align: top;
  width: 100%;
  height: 30px;
  padding: 5px;
  font-size: 22px;
  color: var(--white);
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: var(--blue);
  border: none;
  cursor: pointer;
}

.todo-item button:active {
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

.todo-item button:hover {
    background-color: var(--dark-green);
    transition: .2s;
}

.todo-item input[type=text] {
    height: 40px;
    font-size: 32px;
    width: 500px;
    border: none;
    font-family: var(--font-family-open-sans);
    background-color: var(--blue);
    color: var(--white);
    font-weight: 300;
    padding: 5px 10px;
}

.todo-item input[type=text]:focus {
    outline: 0;
    border-bottom: 1px solid var(--cloud-white);
}

.todo-item input::placeholder {
    opacity: 0.7;
    transition: opacity .2s;
    padding: 10px;
    font-weight: 300;
    color: var(--light-gray);
}

.todo-item input:focus::placeholder {
    opacity: 0;
}

.todo-item ul {
    list-style-type: none;
    box-sizing: border-box;
}

.todo-item ul .priority {

}

</style>
