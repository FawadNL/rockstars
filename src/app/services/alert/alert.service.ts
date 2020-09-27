import { Injectable } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private isLoaderActive = false;
  private alertHeader = 'The Rockstars IT';
  constructor(
    private alertController: AlertController,
    private loadingCtrl: LoadingController
  ) { }

  /**
   * @description This function is to create show alert.
   *
   * @param message Message of alert
   * @param header Header [Optional] default : The Rockstars IT
   * @param buttonText Button Text [Optional] default: OK
   */
  async showAlert(
    message: string,
    header = this.alertHeader,
    buttonText: string = 'OK'
  ) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [buttonText]
    });
    await alert.present();
  }
  /**
   *
   * @param title Alert Heading title
   * @param subTitle Alert description
   * @param handler Handler when OK button click
   * @param button_ok: default: OK
   * @param button_cancel default: CANCEL
   */
  async confirmAlert(
    message: string,
    handler,
    header = this.alertHeader,
    buttonOk: string = 'OK',
    buttonCancel: string = 'cancel'
  ) {
    const basicAlert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: buttonCancel,
          role: 'cancel',
          handler: () => { }
        },
        {
          text: buttonOk,
          handler: () => {
            handler();
          }
        }
      ]
    });
    basicAlert.present();
  }

  /**
   * @description function to present loader
   * @param message custom message to show with loader
   */
  async showLoader(message: string = '') {
    const loader = await this.loadingCtrl.create({
      message,
      spinner: 'bubbles',
      mode: 'ios'
    });
    await loader.present();
    this.isLoaderActive = true;
  }

  /**
   * @description function to hide loader
   */
  hideLoader() {
    if (this.isLoaderActive) {
      this.loadingCtrl.dismiss();
      this.isLoaderActive = false;
    }
  }
}
