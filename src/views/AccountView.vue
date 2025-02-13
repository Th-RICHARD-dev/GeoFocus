<script>
import local from '@/stores/local';
import gsap from 'gsap';
import MotionPathPlugin from 'gsap/MotionPathPlugin';
import ProfileAvatar from 'vue-profile-avatar';

gsap.registerPlugin(MotionPathPlugin);

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
            quizScore: localStorage.getItem('quizScore') || 0,
            maxScore: 800
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
        },
        updateQuizScore(newScore) {
            this.quizScore = newScore;
            localStorage.setItem('quizScore', this.quizScore);
            this.progressMarker();
        },
        progressMarker() {
            const progress = this.quizScore / this.maxScore;
            gsap.to('#marker', {
                duration: 1,
                ease: 'power2.inOut',
                motionPath: {
                    path: '#path path',
                    align: '#path path',
                    alignOrigin: [0.5, 0.5],
                    autoRotate: true,
                    start: 0,
                    end: progress
                }
            });
        }
    },
    mounted() {
        this.progressMarker();
    },
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
        <p>Ma progression</p>
        <svg id="path" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 3095 3095" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"
            project-id="425f2e5e8f3049938e303f10342496ef" export-id="51895ca61f1844e387b3daef209750d8" cached="false">
            <path
                d="M15,3080.192787L15,781.5c0,0,441.177513-766.269856,766.269856-766.269856s766.230145,766.230145,766.230145,766.230145v1537.539711c0,0,450.717102,745.945402,776,745.945402s757.39829-727.343693,757.39829-727.343693v-2337.601709"
                transform="translate(.000002 0)" fill="none" stroke="#2b3235" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="1 60" />
        </svg>
        <font-awesome-icon :icon="['fas', 'passport']" id="marker"/>
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

#path {
    height: 50%;
    margin: 0 auto;
}

#marker {
    color: var(--vt-c-white);
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
</style>