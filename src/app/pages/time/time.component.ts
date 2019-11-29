import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-time',
    templateUrl: './time.component.html',
    styleUrls: ['./time.component.scss'],
})
export class TimeComponent implements OnInit {

    distance: number;
    pace: string;
    result: string;

    constructor() {
      const currentDate = new Date();
      this.pace = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).toISOString();
    }

    ngOnInit() {
    }

    onChange() {
        const date = new Date(this.pace);
        const seconds = date.getMinutes() * 60 + date.getSeconds();
        this.result = moment().startOf('day').add(this.distance * seconds, 'seconds').format('HH:mm:ss');
    }

}
