import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-agenda',
  styleUrl: 'app-agenda.css',
  scoped: true,
})
export class AppAgenda {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Agenda</ion-title>
            <ion-buttons slot="end">
              <ion-button href="/calendar">
                <ion-icon slot="icon-only" name="calendar"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-list>
            <ion-item-group>
              <ion-item-divider>
                <ion-label>May 3</ion-label>
              </ion-item-divider>
              {
                [
                  { company: 'Canada Post', currentLocation: 'Saskatoon, SK', trackingNumber: '1234567891' },
                  { company: 'Canada Post', currentLocation: 'Calgary, AB', trackingNumber: '1234567890' },
                  { company: 'Canada Post', currentLocation: 'Toronto, ON', trackingNumber: '1234567893' },
                  { company: 'FedEx', currentLocation: 'Toronto, ON', trackingNumber: '3456789012' },
                ].map(packageInfo => (
                  <ion-item button href="/detail">
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-label>{packageInfo.company}</ion-label>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col>
                          <ion-note color="medium">{packageInfo.trackingNumber}</ion-note>
                        </ion-col>
                        <ion-col size="auto">
                          <ion-label color="success">{packageInfo.currentLocation}</ion-label>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-item>
                ))
              }
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider>
                <ion-label>May 9</ion-label>
              </ion-item-divider>
              {
                [
                  { company: 'UPS', currentLocation: 'Saskatoon, SK', trackingNumber: '2345678903' },
                  { company: 'Canada Post', currentLocation: 'Saskatoon, SK', trackingNumber: '1234567891' },
                  { company: 'FedEx', currentLocation: 'Toronto, ON', trackingNumber: '3456789012' },
                ].map(packageInfo => (
                  <ion-item button href="/detail">
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-label>{packageInfo.company}</ion-label>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col>
                          <ion-note color="medium">{packageInfo.trackingNumber}</ion-note>
                        </ion-col>
                        <ion-col size="auto">
                          <ion-label color="success">{packageInfo.currentLocation}</ion-label>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-item>
                ))
              }
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider>
                <ion-label>May 10</ion-label>
              </ion-item-divider>
              {
                [
                  { company: 'UPS', currentLocation: 'Saskatoon, SK', trackingNumber: '2345678903' },
                ].map(packageInfo => (
                  <ion-item button href="/detail">
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-label>{packageInfo.company}</ion-label>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col>
                          <ion-note color="medium">{packageInfo.trackingNumber}</ion-note>
                        </ion-col>
                        <ion-col size="auto">
                          <ion-label color="success">{packageInfo.currentLocation}</ion-label>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-item>
                ))
              }
            </ion-item-group>
            <ion-item-group>
              <ion-item-divider>
                <ion-label>May 16</ion-label>
              </ion-item-divider>
              {
                [
                  { company: 'UPS', currentLocation: 'Saskatoon, SK', trackingNumber: '2345678903' },
                  { company: 'Canada Post', currentLocation: 'Saskatoon, SK', trackingNumber: '1234567891' },
                ].map(packageInfo => (
                  <ion-item button href="/detail">
                    <ion-grid>
                      <ion-row>
                        <ion-col>
                          <ion-label>{packageInfo.company}</ion-label>
                        </ion-col>
                      </ion-row>
                      <ion-row>
                        <ion-col>
                          <ion-note color="medium">{packageInfo.trackingNumber}</ion-note>
                        </ion-col>
                        <ion-col size="auto">
                          <ion-label color="success">{packageInfo.currentLocation}</ion-label>
                        </ion-col>
                      </ion-row>
                    </ion-grid>
                  </ion-item>
                ))
              }
            </ion-item-group>
          </ion-list>
        </ion-content>
      </Host>
    );
  }

}
