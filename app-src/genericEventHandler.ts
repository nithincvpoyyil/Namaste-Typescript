/**
 * Interface is for EventHandler implemented in BaseView class
 */
export interface CrGenericEventHandler {
  // Collection of events registered
  eventCollection: { event: string; handler: Function; data: any }[];
  // method for registering events ; similar to jquery function
  on(type: string, handler: Function, data?: any): void;
  // method to unregister events ; similar to jquery function
  off(type: string): void;
  // method for trigger events ; similar to jquery function
  trigger(type: string, data?: any): void;
}
