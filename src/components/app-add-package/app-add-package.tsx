import { alertController } from '@ionic/core';
import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-add-package',
  styleUrl: 'app-add-package.css',
  scoped: true,
})
export class AppAddPackage {

  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-buttons slot="start">
              <ion-back-button defaultHref="/"></ion-back-button>
            </ion-buttons>
            <ion-title>Add Packages</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-item>
            <ion-label position="fixed">Tracking #</ion-label>
            <ion-input placeholder="Enter your tracking number here..."></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="fixed">Company</ion-label>
            <ion-select placeholder="Select your carrier here..." interface="popover">
              {
                [
                  'Canada Post',
                  'UPS',
                  'FedEx'
                ].map(name => (
                  <ion-select-option>{name}</ion-select-option>
                ))
              }
            </ion-select>
          </ion-item>
          <ion-button expand="block" onClick={async () => {
            const alert = await alertController.create({
              header: 'Package Added',
              message: 'Your new tracking is added.',
              buttons: [
                {
                  text: 'OK',
                  handler: () => {
                    document.querySelector('ion-router').push('/');
                  }
                }
              ]
            });
            await alert.present();
          }}>Add</ion-button>
        </ion-content>
      </Host>
    );
  }

}
