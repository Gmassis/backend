import { HealthController } from '../../input/controller/health-controller';

export const healthModule = (): HealthController => {
  return new HealthController();
};
