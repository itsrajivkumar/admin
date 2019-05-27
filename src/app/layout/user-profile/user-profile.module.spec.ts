import { UserProfileModule } from './user-profile.module';

describe('BlankPageModule', () => {
    let blankPageModule: UserProfileModule;

    beforeEach(() => {
        blankPageModule = new UserProfileModule();
    });

    it('should create an instance', () => {
        expect(UserProfileModule).toBeTruthy();
    });
});
