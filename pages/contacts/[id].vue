<script setup lang="ts">
import { uploadToBucket, getFileUrl } from "~/helpers";

const route = useRoute();

// const { data } = await useFetch(`/api/contact/${route.params.id}`);

const cv = ref(null);
const keywords = ref(null);
const cvUrl = ref("");

const buscando = ref(false);

async function getCv() {
  const cv = await getFileUrl({
    key: `cvs/${route.params.id}/sample.pdf`,
  });
  if (cv) {
    cvUrl.value = cv;
  }
}

//onMounted(() => {
//  getCv();
//});

const toBase64 = (file): Promise<string | ArrayBuffer> =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const handleFileUpload = async () => {
  const file: File = cv.value.files[0];

  const fileEncoded = await toBase64(file);

  if (typeof fileEncoded === "string") {
    await uploadToBucket({
      key: `cvs/${route.params.id}/sample.pdf`,
      file: fileEncoded,
    });
  }
  await getCv();
};

// const updateCv = async () => {
//   const words = keywords.value?.value?.split(",");
//   // TODO
//   // await $fetch("/api/parsecv", {
//   //   method: "POST",
//   //   body: { id: route.params.id, keywords: words },
//   // });
//   // buscando.value = true;
//   // setTimeout(async () => {
//   //   data.value = await $fetch(`/api/contact/${route.params.id}`);
//   //   buscando.value = false;
//   // }, 5000);
// };
</script>

<template>
  <main>
    <!--<h2>{{ data.name }}</h2>-->
    <div>
      Keywords encontradas:
      <ul>
        <!--<li v-for="(tag, index) in data.tags" :key="index">{{ tag }}</li>-->
      </ul>
    </div>
    <div>
      <input ref="cv" v-on:change="handleFileUpload" type="file" />
      <label>Buscar Keywords:</label>
      <input ref="keywords" type="text" />
      <!--<button @click="updateCv" :disabled="buscando">BUSCA</button>-->
    </div>
    <iframe width="640" height="480" :src="cvUrl"></iframe>
  </main>
</template>

<style>
button {
  background-color: #0000ff;
  color: #ffffff;
}

button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>
