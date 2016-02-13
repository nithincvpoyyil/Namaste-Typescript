
/**
 * Calss is for EventHandler
 */
/// <reference path="./genericEventHandler.ts"/>
import {CrGenericEventHandler} from './genericEventHandler';

export class BaseView implements CrGenericEventHandler {

  private container: any;
  public eventCollection: { event: string; handler: Function; data: any }[];

  constructor(container) {
    this.container = container;
    this.eventCollection = [];
  }

  on(type: string, handler: Function, data?: any): void {
    this.eventCollection.push({ "event": type, "handler": handler, "data": data });
  }

  off(type: string): void {
    this.eventCollection = this.eventCollection.filter(function(eventManageItem) {
      return (eventManageItem["event"] !== type)
    });
  }

  trigger(type: string, data?: any): void {
    var self = this;
    self.eventCollection.forEach(function(eventManageItem) {
      if (eventManageItem["event"] === type) {
        eventManageItem["handler"].call(null, data, eventManageItem["data"]);
      }
    });
  }

  getContainer(): any {
    return this.container;
  }

  logger(msg: any): void {
    console.info(new Date().getTime() + " >>" + msg)
  }

  debug(): void {
    debugger;
  }
}
