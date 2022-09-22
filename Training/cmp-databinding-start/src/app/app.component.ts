import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [{type: 'server', name: 'Testserver', content: 'Just a test!'}];  

  onServerAdded(serverData: {serverName: string, severContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.severContent
    });
  }

  onBlueprintAdded(blueprintData: {serverName: string, severContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.serverName,
      content: blueprintData.severContent
    });
  }
  
  onChangeFirst() {
    this.serverElements[0].name = 'Changes!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
