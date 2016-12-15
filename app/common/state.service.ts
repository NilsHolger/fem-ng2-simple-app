import {Injectable} from '@angular/core';

@Injectable()
export class StateService {
	private message = 'Hello Carmen, you are my hero, you are the best hero, will you be my hero?';

  getMessage(): string {
    return this.message;
  }

  setMessage(newMessage: string): void {
    this.message = newMessage;
  }
}
