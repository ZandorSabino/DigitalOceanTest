<script setup lang="ts">
// const { isLoggedIn, signOut } = useAuth();
</script>
<template>
  <div>
    <nav>
      <ul>
        <li>
          <nuxt-link to="/">Contatos</nuxt-link>
        </li>
        <li>
          <nuxt-link v-if="!isLoggedIn" to="/login">Login</nuxt-link>
          <button v-else @click="signOut">Sign Out</button>
        </li>
      </ul>
    </nav>
    <slot></slot>
  </div>
</template>
