
/**
 * Calss is for EventHandler
 */
/// <reference path="./genericEventHandler.ts"/>
import {CrGenericEventHandler} from './genericEventHandler';

export class BaseView implements CrGenericEventHandler {
  // container class
  private container: any;
  //event collection of binded events
  eventCollection: { event: string; handler: Function; data: any }[];

  constructor(container) {
    this.container = container;
    this.eventCollection = [];
  }
  // 'on' method implementation of Interface
  on(type: string, handler: Function, data?: any): void {
    this.eventCollection.push({ "event": type, "handler": handler, "data": data });
  }
  // 'off' method implementation of Interface
  off(type: string): void {
    this.eventCollection = this.eventCollection.filter(function(eventManageItem) {
      return (eventManageItem["event"] !== type)
    });
  }
  //'trigger' method implementation of Interface
  trigger(type: string, data?: any): void {
    var self = this;
    self.eventCollection.forEach(function(eventManageItem) {
      if (eventManageItem["event"] === type) {
        eventManageItem["handler"].call(null, data, eventManageItem["data"]);
      }
    });
  }
// Getter for container node
  getContainer(): any {
    return this.container;
  }
  //logger method for debugging
  logger(msg: any): void {
    console.info(new Date().getTime() + " >>" + msg)
  }

}
