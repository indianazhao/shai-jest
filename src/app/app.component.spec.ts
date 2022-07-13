import { AppComponent } from './app.component';

describe('AppComponent', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  });

  it('should have a little shai-jest', () => {
    expect(fixture.title).toEqual('shai-jest');
  });
})
