class Guesser {

    constructor(initialNumber = -1, lastNumber = 1000) {
        this.initialNumber = initialNumber;
        this.lastNumber = lastNumber;
        this.findNumber = false;
        this.totalGuess = 1;
        this.numberAnswer = Math.floor(Math.random() * this.lastNumber);
    }

    getAverage() {
        let avarege = Math.ceil((this.initialNumber + this.lastNumber) / 2);
        return avarege;
    }

    answer(userAnswer) {
        if (userAnswer === 'y') {
            this.initialNumber = this.getAverage();
        } else if (userAnswer === 'n') {
            this.lastNumber = this.getAverage();
        }
        this.totalGuess++;
    }

    hasFind() {
        if (this.initialNumber === this.lastNumber || this.initialNumber + 1 === this.lastNumber) {
            this.numberAnswer = this.initialNumber + 1;
            return true;
        }else{
            return false;
        }
    }

    getUserNumber(){
        return this.numberAnswer;
    }

}