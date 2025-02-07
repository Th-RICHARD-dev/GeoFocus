<script>
import quiz from '@/assets/quiz.json';
import QuizQuestions from '@/components/QuizQuestions.vue';

export default {
    components: {
        QuizQuestions
    },
    data() {
        return {
            quizData: this.getRandomQuestions(quiz),
            questionIndex: 0,
            questionStates: []
        };
    },
    computed: {
        htmlContent() {
            return `${this.questionIndex + 1} / 20`;
        }
    },
    methods: {
        getRandomQuestions(quiz) {
            const randomQuiz = quiz.sort(() => 0.5 - Math.random());
            return randomQuiz.slice(0, 20);
        },
        nextQuestion() {
            if (this.questionIndex < this.quizData.length - 1) {
                this.questionIndex++;
                this.$refs.quizQuestions.resetQuestion();
            }
        },
    }
};
</script>

<template>
    <div class="quiz-container">
        <p v-if="quizData.length" v-html="htmlContent"></p>
        <QuizQuestions ref="quizQuestions" v-if="quizData[questionIndex]" :questionData="quizData[questionIndex]" />
        <button @click="nextQuestion">Suivant</button>
    </div>
</template>

<style scoped>
.quiz-container {
    height: 75vh;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

p {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    top: 15px;
    color: var(--vt-c-black-mute);
}

button {
    width: 100%;
    height: 50px;
    background-color: var(--vt-c-blue);
    border: none;
    color: var(--vt-c-black-mute);
    border-radius: 10px;
    font-size: 1.5rem;
    font-weight: bold;
    cursor: pointer;
    margin-bottom: 25px;
    border: 1px solid var(--vt-c-blue-mute);
    box-shadow: 0 2.5px 0 var(--vt-c-blue-mute);
    transition: transform .5s ease;
}

button:active {
    transform: translateY(1.5px);
}
</style>