import { UserListRoutingModule } from './user-list-routing.module';

describe('UserListRoutingModule', () => {
  let userListRoutingModule: UserListRoutingModule;

  beforeEach(() => {
    userListRoutingModule = new UserListRoutingModule();
  });

  it('should create an instance', () => {
    expect(userListRoutingModule).toBeTruthy();
  });
});
