import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
})
export class AppRoot {
  render() {
    return (
      <ion-app>
        <ion-router useHash={true}>
          <ion-route url="/" component="app-home" />
          <ion-route url="/add" component="app-add-package"></ion-route>
          <ion-route url="/detail" component="app-package-detail"></ion-route>
          <ion-route url="/map" component="app-map"></ion-route>
          <ion-route url="/calendar" component="app-calendar"></ion-route>
          <ion-route url="/agenda" component="app-agenda"></ion-route>
        </ion-router>
        <ion-nav />
      </ion-app>
    );
  }
}
