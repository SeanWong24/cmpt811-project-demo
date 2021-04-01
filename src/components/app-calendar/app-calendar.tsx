import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-calendar',
  styleUrl: 'app-calendar.css',
  scoped: true,
})
export class AppCalendar {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Calender</ion-title>
            <ion-buttons slot="end">
              <ion-button href="/agenda">
                <ion-icon slot="icon-only" name="list"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-img src="/assets/calendar.png" onClick={() => {
            document.querySelector('ion-router').push('/agenda');
          }}></ion-img>
        </ion-content>
      </Host>
    );
  }

}
