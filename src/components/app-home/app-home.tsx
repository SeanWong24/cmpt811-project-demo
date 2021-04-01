import { popoverController } from '@ionic/core';
import { Component, h, Host } from '@stencil/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  scoped: true,
})
export class AppHome {
  render() {
    return (
      <Host>
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>My Packages</ion-title>
            <ion-buttons slot="end">
              <ion-button href="/calendar">
                <ion-icon slot="icon-only" name="calendar"></ion-icon>
              </ion-button>
              <ion-button onClick={async (event) => {
                const popover = await popoverController.create({
                  component: 'app-filter',
                  event,
                  translucent: true
                });
                await popover.present();
              }}>
                <ion-icon slot="icon-only" name="funnel"></ion-icon>
              </ion-button>
              <ion-button href="/add">
                <ion-icon slot="icon-only" name="add"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding">
          <ion-list>
            {
              [
                { company: 'UPS', currentLocation: 'Saskatoon, SK', expectedDeliveryDate: 'Mon', trackingNumber: '2345678903' },
                { company: 'Canada Post', currentLocation: 'Saskatoon, SK', expectedDeliveryDate: 'Tue', trackingNumber: '1234567891' },
                { company: 'Canada Post', currentLocation: 'Calgary, AB', expectedDeliveryDate: 'Wed', trackingNumber: '1234567890' },
                { company: 'Canada Post', currentLocation: 'Toronto, ON', expectedDeliveryDate: 'Wed', trackingNumber: '1234567893' },
                { company: 'Canada Post', currentLocation: 'Toronto, ON', expectedDeliveryDate: 'Wed', trackingNumber: '1234567893' },
                { company: 'FedEx', currentLocation: 'Toronto, ON', expectedDeliveryDate: 'Thu', trackingNumber: '3456789012' },
                { company: 'UPS', currentLocation: 'Toronto, ON', expectedDeliveryDate: 'May 15', trackingNumber: '2345678902' },
                { company: 'Canada Post', currentLocation: 'Edmonton, AB', expectedDeliveryDate: 'Jun 3', trackingNumber: '1234567892' },
                { company: 'FedEx', currentLocation: 'Calgary, AB', expectedDeliveryDate: 'Delayed', trackingNumber: '3456789013' },
                { company: 'UPS', currentLocation: 'Toronto, ON', expectedDeliveryDate: 'Delayed', trackingNumber: '2345678901' },
              ].map(packageInfo => (
                <ion-item button href="/detail">
                  <ion-grid>
                    <ion-row>
                      <ion-col>
                        <ion-label>{packageInfo.company}</ion-label>
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
                </ion-item>
              ))
            }
          </ion-list>
        </ion-content>
      </Host>
    );
  }
}
