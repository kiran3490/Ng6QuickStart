import * as Rollbar from 'rollbar';
import { Injectable, ErrorHandler, Injector, InjectionToken } from '@angular/core';

@Injectable()
export class RollbarErrorHandler implements ErrorHandler {
    constructor(private injector: Injector) { }

    handleError(err: any): void {
        console.log('error');
        const rollbar = this.injector.get(RollbarService);
        rollbar.error(err.originalError || err);
    }
}

export const RollbarService = new InjectionToken<Rollbar>('rollbar');
