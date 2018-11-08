import { AuthorizationRoutingModule } from './authorization-routing.module';

describe('AuthorizationRoutingModule', () => {
  let authorizationRoutingModule: AuthorizationRoutingModule;

  beforeEach(() => {
    authorizationRoutingModule = new AuthorizationRoutingModule();
  });

  it('should create an instance', () => {
    expect(authorizationRoutingModule).toBeTruthy();
  });
});
