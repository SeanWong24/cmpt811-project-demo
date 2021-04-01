import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-package-detail',
  styleUrl: 'app-package-detail.css',
  scoped: true,
})
export class AppPackageDetail {

  render() {
    const packageInfo = { company: 'UPS', currentLocation: 'Saskatoon, SK', expectedDeliveryDate: 'Mon', trackingNumber: '2345678903' };

    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Package Detail</ion-title>
            <ion-buttons slot="end">
              <ion-button href="/map">
                <ion-icon slot="icon-only" name="map"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-grid slot="fixed" style={{ width: 'calc(100% - 50px)', marginLeft: '25px', marginRight: '25px' }}>
            <ion-row>
              <ion-col>
                <ion-label>
                  <h1>{packageInfo.company}</h1>
                </ion-label>
              </ion-col>
              <ion-col size="auto">
                <ion-note color={packageInfo.expectedDeliveryDate === 'Delayed' ? 'danger' : 'primary'}>{packageInfo.expectedDeliveryDate}</ion-note>
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
          <ion-list style={{ marginTop: '75px' }}>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">{packageInfo.currentLocation}</ion-card-title>
                <ion-card-subtitle>Yesterday</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                At the post office
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">Somewhere</ion-card-title>
                <ion-card-subtitle>Sometime</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Some info
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">Somewhere</ion-card-title>
                <ion-card-subtitle>Sometime</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Some info
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">Somewhere</ion-card-title>
                <ion-card-subtitle>Sometime</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Some info
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">Somewhere</ion-card-title>
                <ion-card-subtitle>Sometime</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Some info
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-header>
                <ion-card-title color="success">Somewhere</ion-card-title>
                <ion-card-subtitle>Sometime</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                Some info
              </ion-card-content>
            </ion-card>
          </ion-list>
        </ion-content>
      </Host>
    );
  }

}
