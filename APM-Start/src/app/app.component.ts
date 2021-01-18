import { Component } from "@angular/core";

@Component ({
selector: 'pm-root',
template: `
<div><h1>{{pageTitle}}</h1>
<div>My first template</div>
<pm-products></pm-products>
</div>
`
})

export class AppComponent {
  pageTitle: string  = 'Acame product Management';
}
