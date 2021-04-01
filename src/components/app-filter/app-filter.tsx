import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-filter',
  styleUrl: 'app-filter.css',
  scoped: true,
})
export class AppFilter {

  render() {
    return (
      <Host>
        <ion-content class="ion-padding">
          <ion-list>
            <ion-item>
              <ion-label>From</ion-label>
              <ion-datetime value="2020-01-01"></ion-datetime>
            </ion-item>
            <ion-item>
              <ion-label>To</ion-label>
              <ion-datetime value="2021-01-01"></ion-datetime>
            </ion-item>
            <ion-item-divider></ion-item-divider>
            <ion-item>
              <ion-label>Show Delivered</ion-label>
              <ion-toggle checked={true}></ion-toggle>
            </ion-item>
            <ion-item>
              <ion-label>Show In Trasit</ion-label>
              <ion-toggle checked={true}></ion-toggle>
            </ion-item>
            <ion-item-divider></ion-item-divider>
            <ion-item>
              <ion-label>Sort By</ion-label>
              <ion-select value="Expected Delivery Time">
                <ion-select-option>Expected Delivery Time</ion-select-option>
                <ion-select-option>Company</ion-select-option>
              </ion-select>
            </ion-item>
          </ion-list>
        </ion-content>
      </Host>
    );
  }

}
