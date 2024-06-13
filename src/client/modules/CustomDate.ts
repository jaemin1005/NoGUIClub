class CustomDate {

  date : Date

  constructor(){
    this.date = new Date();
  }

  DateToString() : string{
    const year = this.date.getFullYear();
    const month = (this.date.getMonth() + 1).toString().padStart(2,'0');
    const day = this.date.getDate().toString().padStart(2,'0');
  
    return year + "-" + month + "-" + day; 
  }

  GetUnixTime() : number {
    return Math.floor(this.date.getTime() / 1000);
  }

  UnixIntoTime(unixTime : number) : string {
    const date = new Date(unixTime * 1000);

    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2,'0');
    const day = date.getDate().toString().padStart(2,'0');

    const hour = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const second = date.getSeconds().toString().padStart(2,'0');


    return `${year}-${month}-${day} ${hour}:${minutes}:${second}`;
  }
}

export const customDate = new CustomDate();