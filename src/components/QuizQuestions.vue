<script>
export default {
    props: {
        questionData: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            selectedAnswer: null,
            answerSelected: false,
        };
    },
    methods: {
        isImage(option) {
            return option.endsWith('.png');
        },
        checkAnswer(answer) {
            if (!this.answerSelected) {
                this.selectedAnswer = answer;
                this.answerSelected = true;

                if (this.selectedAnswer === this.questionData.correct_answer) {
                    this.$emit('correct-answer');
                }
            }
        },
        addClass(answer) {
            if (this.selectedAnswer === answer) {
                return {
                    correctAnswer: this.selectedAnswer === this.questionData.correct_answer,
                    incorrectAnswer: this.selectedAnswer !== this.questionData.correct_answer
                };
            }
        },
        resetQuestion() {
            this.selectedAnswer = null;
            this.answerSelected = false;
        },
    },
};
</script>

<template>
    <div class="container">
        <p>{{ questionData.question }}</p>
        <div v-for="(answer, index) in questionData.options" :key="index">
            <label :class="addClass(answer)" @click="checkAnswer(answer)">
                <img v-if="isImage(answer)" :src="answer" :alt="index + 1" />
                <span v-else>{{ answer }}</span>
            </label>
        </div>
        <transition name="fade">
            <div v-if="selectedAnswer" v-html="questionData.alt"></div>
        </transition>
    </div>
</template>

<style scoped>
.container {
    width: 100%;
    color: var(--vt-c-white);
}

img {
    max-width: 70px;
    max-height: 70px;
    border-radius: 7.5px;
}

label {
    display: block;
    width: 100%;
    margin: 10px 0;
    padding: 10px;
    border: 1px solid var(--vt-c-black-mute);
    box-shadow: 0 2.5px 0 var(--vt-c-black-mute);
    border-radius: 7.5px;
    cursor: pointer;
    transition: .5s ease;
}

label:active {
    transform: translateY(0.75px);
}

label.correctAnswer {
    border: 1px solid rgb(45, 200, 45);
    box-shadow: 0 2.5px 0 rgb(45, 200, 45);
}

label.incorrectAnswer {
    border: 1px solid rgb(200, 45, 45);
    box-shadow: 0 2.5px 0 rgb(200, 45, 45);
}

label:active {
    transform: translateY(1.5px);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>