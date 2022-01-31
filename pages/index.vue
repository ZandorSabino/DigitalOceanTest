<script setup lang="ts">
import { fetchContacts } from "~/helpers";

const contacts = await fetchContacts();
</script>

<template>
  <main>
    <h2>Contatos</h2>
    <table>
      <tr>
        <th>Nome</th>
        <th>Etiquetas</th>
      </tr>
      <tr v-for="contact in contacts" :key="contact.id">
        <td>{{ contact.name }}</td>
        <td>{{ contact.tags }}</td>
        <td><NuxtLink :to="`/contacts/${contact.id}`">Detalhes</NuxtLink></td>
      </tr>
    </table>
  </main>
</template>
