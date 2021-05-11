import { Component } from '@angular/core';
import { Logger } from '../logger.service';

@Component({
    selector: 'hello-world-di',
    templateUrl: './hello-world-di.component.html'
})

export class HelloWorldDi {
  count = 0;

  constructor (private logger: Logger){

  }

  onLogMe(){
      this.count++
      this.logger.writeCount(this.count);
  }
}