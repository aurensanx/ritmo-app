import {Component, OnInit} from '@angular/core';
import * as moment from 'moment';

@Component({
    selector: 'app-pace',
    templateUrl: './pace.component.html',
    styleUrls: ['./pace.component.scss'],
})
export class PaceComponent implements OnInit {

    distance: number;
    time: string;
    result: string;

    constructor() {
        const currentDate = new Date();
        this.time = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()).toISOString();
    }

    ngOnInit() {
    }

    onChange() {
        const date = new Date(this.time);
        const seconds = date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds();
        this.result = moment().startOf('day').add(seconds / this.distance, 'seconds').format('m:ss');
    }

}
