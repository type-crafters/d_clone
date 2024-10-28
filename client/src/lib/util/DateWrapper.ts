export default class DateWrapper extends Date {
    constructor();
    constructor(value: ConstructorParameters<typeof Date>);

    constructor(value?: ConstructorParameters<typeof Date>) {
        if(value === undefined) {
            super(Date.now());
        } else {
            super(...value);
        }
    }

    public toMysqlDateTime(): string {
        const YYYY = this.getFullYear();
        const MM = String(this.getMonth() + 1).padStart(2, "0");
        const DD = String(this.getDate()).padStart(2, "0");
        const hh = String(this.getHours()).padStart(2, '0');
        const mm = String(this.getMinutes()).padStart(2, '0');
        const ss = String(this.getSeconds()).padStart(2, '0');

        return `${YYYY}-${MM}-${DD} ${hh}:${mm}:${ss}`;
    }

    public toReadableTimestamp(): string {
        const readable: string[] = [];
        const now: DateWrapper = new DateWrapper();

        let date: string = `${this.getFullYear()}-${this.getMonth() + 1}-${this.getDate()}`;

        if(this.getFullYear() == now.getFullYear() && this.getMonth() == now.getMonth()) {
            if(this.getDate() == now.getDate()) {
                date = "Today";
            } else if(this.getDate() + 1 == now.getDate()) {
                date = "Yesterday";
            }
        }

        readable.push(date);
        readable.push("at");

        const meridian: string = this.getHours() >= 12 ? "PM" : "AM";

        readable.push(String((this.getHours()%12 || 12)) + ":" + String(this.getMinutes()).padStart(2, "0"));
        readable.push(meridian);

        return readable.join(" ");
    }
}