<script setup>
import { reactive } from "vue";

// const loginState = reactive({
//   email: "",
//   password: "",
// });

// const { signIn } = useAuth();
// const login = async () => {
//   try {
//     await signIn(loginState.email, loginState.password);
//   } catch (error) {
//     alert(error.error_description || error.message);
//   }
// };
</script>

<template>
  <main>
    <h1>Sign Up</h1>
    <form @submit.prevent>
      <div>
        <label for="email">Email</label>
        <input
          id="email"
          type="email"
          v-model="loginState.email"
          placeholder="Email"
        />
      </div>
      <div>
        <label for="password">Email</label>
        <input id="password" type="password" v-model="loginState.password" />
      </div>
      <div>
        <button @click="login">Login</button>
      </div>
    </form>
  </main>
</template>
