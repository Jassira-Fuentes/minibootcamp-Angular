export class LoggingService {
    longStatusChange(status: string) {
        console.log('A server status changed, new status: ' + status);
    }
}