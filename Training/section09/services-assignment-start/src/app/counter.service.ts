export class CounterService {
    activeToInactiveCounter = 0;
    inactiveToActiveCounter = 0;

    incrementActivetoInactive() {
        this.activeToInactiveCounter++;
        console.log('Active to Inactive: ' + this.activeToInactiveCounter);

    }

    incrementInActivetoActive() {
        this.inactiveToActiveCounter++;
        console.log('Inactive a Active: ' + this.inactiveToActiveCounter);
        
    }

}