<script>
import local from '@/stores/local';
import ProfileAvatar from 'vue-profile-avatar';

export default {
    components: {
        ProfileAvatar
    },
    props: {
        username: {
            type: String,
            default: 'Geoffrey',
            required: true
        },
    },
    data() {
        return {
            selectedColor: local.selectedColor,
            inputUsername: localStorage.getItem('selectedUsername') || this.username,
            quizScore: localStorage.getItem('quizScore') || 0
        };
    },
    methods: {
        updateColor(event) {
            this.selectedColor = event.target.value;
        },
        updateUsername(event) {
            this.inputUsername = event.target.value;
            localStorage.setItem('selectedUsername', this.inputUsername);
            this.$emit('update:selectedUsername', this.inputUsername);
        }
    }
};
</script>

<template>
    <input class="color" type="color" v-model="selectedColor" @input="updateColor" />
    <div :style="{ backgroundColor: selectedColor }" class="color-box">
        <font-awesome-icon :icon="['fas', 'paintbrush']" class="brush" />
        <h3>Votre profil</h3>
        <ProfileAvatar :username="inputUsername || username" class="profil" size="l" image=""></ProfileAvatar>
    </div>
    <div class="wrapper">
        <input class="text" type="text" v-model="inputUsername" placeholder="Enter username" @input="updateUsername" />
        <p>Ma progression : {{ quizScore }} / 800</p>
        <img class="path" src="../../public/path.svg" alt="scorepath" />
    </div>
</template>

<style scoped>
.color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 25vh;
    opacity: 0;
    z-index: 1;
}

.color-box {
    position: absolute;
    top: 0;
    left: 0;
    background-color: var(--vt-c-blue);
    height: 25vh;
    width: 100%;
    border-bottom: 1px solid var(--vt-c-black-mute);
}

.brush {
    border-radius: 50%;
    background-color: var(--vt-c-black-mute);
    padding: 7.5px;
    color: var(--vt-c-white);
    left: 5px;
    font-size: 0.8em;
    position: absolute;
    left: 10px;
    top: 10px;
}

h3 {
    color: var(--vt-c-black-mute);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    color: var(--vt-c-black-mute);
}

.profil {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -40%);
    z-index: 10;
}

.wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
    width: 100%;
    height: 100%;
}

.text {
    margin: 0 auto;
    margin-top: 100px;
    color: var(--vt-c-white);
    background-color: var(--vt-c-black);
    padding: 10px;
    border-radius: 7.5px;
    outline: none;
    border: 1px solid var(--vt-c-black-mute);
    box-shadow: 0 2.5px 0 var(--vt-c-black-mute);
    font-family: "Varela Round", sans-serif;
    transition: .5s ease;
    width: 50%;
}

p {
    color: var(--vt-c-white);
    margin: 15px 0;
    white-space: nowrap;
    display: flex;
    flex-direction: row;
    gap: 10px;
    width: 100%;
}

p::before {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 2.5px;
    background-color: var(--vt-c-white);
    margin: 10px 0;
}

p::after {
    content: '';
    display: block;
    width: 100%;
    height: 1px;
    border-radius: 2.5px;
    background-color: var(--vt-c-white);
    margin: 10px 0;
}

.path {
    height: 50%;
    margin: 0 auto;
    z-index: -1;
    opacity: 0.5;
    transform: rotateY(180deg);
}
</style>