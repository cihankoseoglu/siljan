<template>
  <div class="navbar-profile-dropdown">
    <img src="../../assets/profile_generic.svg" alt="Profile Picture" class="profile-image">
    <div class="navbar-profile-items">
      <router-link to="settings" tag="div">Settings</router-link>
      <div @click="logout">Logout</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'profile',
  data() {
    return {};
  },
  methods: {
    logout() {
      // const vm = this;
      //   firebase.auth().signOut().then(function (resolve) {
      //     vm.$router.push('/');
      //   }).catch(function (error) {
      //     console.log("could not sign out");
      //   });
    },
  },
};
</script>

<style scoped>
.navbar-profile-dropdown {
  display: flex;
  position: relative;
  flex-wrap: wrap;
  align-items: center;
}

.profile-image {
  width: 40px;
  height: 40px;
}

.navbar-profile-items {
  display: none;
  background-color: var(--white);
  list-style-type: none;
  z-index: 1;
  flex-direction: column;
  width: auto;
  padding: 0;
  margin: 0;
}

.navbar-profile-items div {
  border-bottom: 1px solid var(--cloud-white);
  padding: 20px 20px 20px 60px;
  color: var(--black);
  font-size: 18px;
  text-decoration: none;
}

.navbar-profile-dropdown:hover > .navbar-profile-items {
  display: flex;
  position: absolute;
  font-size: 18px;
  top: 20px;
  right: 20px;
  border: 2px solid var(--cloud-white);
}

.navbar-profile-items div:hover {
  cursor: pointer;
  background-color: var(--light-blue);
}
</style>

