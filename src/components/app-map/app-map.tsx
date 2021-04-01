import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-map',
  styleUrl: 'app-map.css',
  scoped: true,
})
export class AppMap {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Package Locations</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content>
          <ion-img src="/assets/map.png" onClick={() => {
            document.querySelector('ion-router').push('/detail');
          }}></ion-img>
        </ion-content>
      </Host>
    );
  }

}
