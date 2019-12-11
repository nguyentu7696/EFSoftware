import {ToastOptions, ToastyService} from 'ng2-toasty';
import { Injectable } from '@angular/core';


@Injectable()
export class NotificationService {
    
    constructor(private toastyService: ToastyService) {
    }

    SuccessNotification(message) {
        const toastOptions: ToastOptions = {
        title: "Successfully",
        msg: message,
        showClose: false,
        timeout: 3000,
        theme: "default",
        };
        this.toastyService.success(toastOptions);
    }

    ErrorNotification(error) {
        const toastOptions: ToastOptions = {
        title: "Error",
        msg: error,
        showClose: false,
        timeout: 3000,
        theme: "default",
        };
        this.toastyService.error(toastOptions);
    }

}