<template>
    <div class="quiz-wrapper">
        <h2>
            <span class="small">Testez et découvrez le</span><br>
            <span class="big">Geo<span class="blue">Q</span>uizz</span>
        </h2>
    </div>
</template>

<style scoped>
.quiz-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 25vh;
    border-radius: 7.5px;
    background-color: var(--vt-c-black);
    border: 1px solid var(--vt-c-black-mute);
    color: var(--vt-c-white);
    margin-bottom: 5px;
    box-shadow: 0 2.5px 0 var(--vt-c-black-mute);
    transition: transform .5s ease;
}

.quiz-wrapper:active {
    transform: translateY(1.5px);
}

h2 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    line-height: 75%;
    transform: translateY(-5px);
}

.small {
    font-size: 1rem;
}

.big {
    font-size: 3rem;
}
.blue {
    font-weight: 600;
    color: var(--vt-c-blue);
}
</style>