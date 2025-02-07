<script>
export default {
  props: {
    modelValue: String
  },
  emits: ['update:modelValue']
};
</script>

<template>
  <input type="text" placeholder="Rechercher..." :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
</template>

<style scoped>
input {
  color: var(--vt-c-white);
  background-color: var(--vt-c-black);
  padding: 10px;
  border-radius: 7.5px;
  outline: none;
  border: 1px solid var(--vt-c-black-mute);
  box-shadow: 0 2.5px 0 var(--vt-c-black-mute);
  font-family: "Varela Round", sans-serif;
  transition: .5s ease;
}

input:focus {
  border: 1px solid var(--vt-c-blue);
  box-shadow: 0 2.5px 0 var(--vt-c-blue);
}

input::placeholder {
  color: var(--vt-c-white);
}

input:active {
  transform: translateY(1.5px);
}
</style>
