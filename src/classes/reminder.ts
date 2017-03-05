export class Reminder{
    name: string;
    date: string;
    time: string;
    end_date: string;
    end_time: string;
    hadDuration: boolean = false;
    avatar: string = "";
    key: string;

    getTotalDays(): number{
        let reminderEndDate = new Date(this.end_date);
        let reminderStartdate = new Date(this.date);

        let totalDays = (<any>reminderEndDate - <any>reminderStartdate) / (1000 * 60 * 60 * 24);
        
        return Math.round(totalDays);
    }

    getLapsedDays(): number{
        let reminderStartdate = new Date(this.date);
        let lapsedDays = (<any>new Date() - <any>reminderStartdate) / (1000 * 60 * 60 * 24);
        
        return Math.round(lapsedDays);
    }

    getPercentage(): number{
        return Math.round(this.getLapsedDays() / this.getTotalDays() * 100);
    }
}
