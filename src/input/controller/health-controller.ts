export class HealthController {
  public handle(): Promise<any> {
    return Promise.resolve('store is online');
  }
}
