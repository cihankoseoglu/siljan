<template>
  <div class="index-signup-form">
    <h1>Sign in</h1>
    <form @submit.prevent>
      <input type="email" v-model="email" name="email" placeholder="Email">
      <input type="password" v-model="password" name="password" placeholder="Password">
      <button
        type="submit"
        @click="signIn"
        name="signin"
        class="signup-submit"
        value="Sign in"
      >Sign in</button>
    </form>

    <div class="login-help">
      <router-link to="signup">
        <a>Sign up</a> -
        <a>Forgot Password</a>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loginform',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    signIn() {
      // const vm = this;
      //   firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
      //       function(user) {
      //           vm.$router.push('/dashboard');
      //       },
      //       function(err) {
      //           alert("oops " + err.message);
      //       }
      //   );
    },
  },
};
</script>

<style scoped>
.index-signup-form {
  max-width: 300px;
}

.index-signup-form h1 {
  font-size: 24px;
  margin-bottom: 40px;
  font-family: var(--font-family-nunito);
}

.index-signup-form input {
  border: none;
}

.index-signup-form button[type="submit"] {
  cursor: pointer;
  width: 300px;
  display: block;
  position: relative;
  margin: 10px 0;
  font-family: var(--font-family-nunito);
  font-weight: 100;
}

.index-signup-form input[type="email"],
.index-signup-form input[type="password"] {
  height: 40px;
  font-size: 16px;
  width: 300px;
  margin-bottom: 10px;
  box-sizing: border-box;
  font-family: var(--font-family-nunito);
  font-weight: 100;
  border-bottom: 1px solid var(--cloud-white);
  padding: 0px 0px 10px 10px;
}

.index-signup-form input::placeholder {
  opacity: 1;
  transition: opacity 0.2s;
  font-weight: 100;
  color: var(--light-gray);
}

.index-signup-form input:focus::placeholder {
  opacity: 0;
}

.signup-submit {
  border: none;
  color: var(--white);
  background-color: var(--light-blue);
  padding: 20px 0px;
  font-size: 18px;
}

.signup-submit:hover {
  background-color: var(--blue);
}

.index-signup-form a {
  text-decoration: none;
  color: #666;
  font-weight: 400;
  text-align: center;
  display: inline-block;
  opacity: 0.6;
  transition: opacity ease 0.5s;
  font-family: var(--font-family-nunito);
}

.login-help {
  font-size: 14px;
  text-align: center;
}
</style>

