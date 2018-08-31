<template>
    <div class="navbar-profile-dropdown">
        <img src="../../assets/profile_generic.svg" alt="Profile Picture" class="profile-image">
        <ul class="navbar-profile-items">
            <li class="navbar-profile-item"><a href="#settings">Settings</a></li>
            <li class="navbar-profile-item"><a href="#logout">Logout</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'profile',
        data() {
            return {
            }
        },
        methods: {
        }
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

.navbar-profile-item {
    border-bottom: 1px solid var(--cloud-white);
    padding: 20px 20px 20px 60px;
}

.navbar-profile-dropdown:hover > .navbar-profile-items {
    display: flex;
    position: absolute;
    font-size: 18px;
    top: 20px;
    right: 20px;
    border: 2px solid var(--cloud-white);
}

.navbar-profile-item:hover {
    cursor: pointer;
    background-color: var(--light-blue);

}

a {
    color: var(--black);
    font-size: 18px;
    text-decoration: none;
}

a:visited {
    color: var(--black);
}

</style>

