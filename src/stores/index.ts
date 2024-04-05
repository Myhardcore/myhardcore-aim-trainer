import {defineStore} from "pinia";

export const useStore = defineStore('store', {
    state: () => ({
        step: 0 as number,
        time: 0 as number,
        score: 0 as number,
        miss: 0 as number,
        lives: 3 as number,
        accuracy: 100 as number,
        difficulty: '' as string,
        playing: false as boolean,
    }),

    actions: {
        increment(num: number): void {
            this.step += num
        },
        chooseTime(time: number): void {
            this.time = time
            this.increment(1)
        },
        chooseDifficulty(difficulty: string): void {
            this.difficulty = difficulty
            this.increment(1)
            this.startGame()
        },
        startGame(): void {
            this.playing = true
        },
        gameOver(): void {
            this.playing = false
            this.step = 5
        },
        gameReset(): void {
            this.step = 0
            this.time = 0
            this.score = 0
            this.miss = 0
            this.lives = 3
            this.accuracy = 100
            this.difficulty = ''
            this.playing = false
        },

        incrementScore(): void {
            this.score++
        },
        incrementMiss(): void {
            this.miss++
            console.log(this.miss)
        },

        decrementLives(): void {
            this.lives--
        },
        calculateAccuracy(): void {
            this.accuracy = Number(((this.score / (this.score + this.miss)) * 100).toFixed(2))
        }

    },

    getters: {
        getStep: (state) => state.step,
        getTime: (state) => state.time,
        getDifficulty: (state) => state.difficulty,
        getScore: (state) => state.score,
        getMiss: (state) => state.miss,
        getPlaying: (state) => state.playing,
        getLives: (state) => state.lives,
        getAccuracy: (state) => state.accuracy
    }
})