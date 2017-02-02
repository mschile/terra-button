import { By } from 'selenium-webdriver';

export default function () {
  describe('Default Button', () => {
    it('Displays as a default Button', (done) => {
      jasmine.driver.get('http://localhost:8080/default.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--default')),
      ).then(done);
    });

    it('Displays with the provided text', (done) => {
      jasmine.driver.get('http://localhost:8080/default.html').then(() =>
          jasmine.driver.findElement(By.className('terra-Button terra-Button--default')).getText(),
        )
        .then((text) => {
          expect(text).toBe('Default');
          done();
        });
    });

    it('Wraps long text', (done) => {
      jasmine.driver.get('http://localhost:8080/long-text.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--default')),
      ).then(done);
    });
  });

  describe('Disabled Button', () => {
    it('Displays as a disabled Button', (done) => {
      jasmine.driver.get('http://localhost:8080/disabled.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button is-disabled')),
      ).then(done);
    });

    it('Displays as a disabled link', (done) => {
      jasmine.driver.get('http://localhost:8080/disabled-link.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button is-disabled')),
      ).then(done);
    });
  });

  describe('Button Types/Intent', () => {
    it('Displays as a primary Button', (done) => {
      jasmine.driver.get('http://localhost:8080/primary.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--primary')),
      ).then(done);
    });

    it('Displays as a secondary Button', (done) => {
      jasmine.driver.get('http://localhost:8080/secondary.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--secondary')),
      ).then(done);
    });

    it('Displays as positive Button', (done) => {
      jasmine.driver.get('http://localhost:8080/positive.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--positive')),
      ).then(done);
    });

    it('Displays as a negative Button', (done) => {
      jasmine.driver.get('http://localhost:8080/negative.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--negative')),
      ).then(done);
    });

    it('Displays as a secondary Button', (done) => {
      jasmine.driver.get('http://localhost:8080/warning.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--warning')),
      ).then(done);
    });

    it('Displays as an info Button', (done) => {
      jasmine.driver.get('http://localhost:8080/info.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--info')),
      ).then(done);
    });
  });

  describe('Button Variants', () => {
    describe('Outline Variant', () => {
      it('Displays with a transparent background', (done) => {
        jasmine.driver.get('http://localhost:8080/outline.html').then(() =>
          jasmine.driver.findElement(By.className('terra-Button terra-Button--outlineDefault')),
        ).then(done);
      });
    });

    describe('Link Variant', () => {
      it('Displays as a link', (done) => {
        jasmine.driver.get('http://localhost:8080/link.html').then(() =>
          jasmine.driver.findElement(By.className('terra-Button terra-Button--linkDefault')),
        ).then(done);
      });
    });
  });

  describe('Button Sizes', () => {
    it('Displays as a tiny Button', (done) => {
      jasmine.driver.get('http://localhost:8080/tiny.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--tiny')),
      ).then(done);
    });

    it('Displays as a small Button', (done) => {
      jasmine.driver.get('http://localhost:8080/small.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--small')),
      ).then(done);
    });

    it('Displays as a medium Button', (done) => {
      jasmine.driver.get('http://localhost:8080/medium.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--medium')),
      ).then(done);
    });

    it('Displays as a large Button', (done) => {
      jasmine.driver.get('http://localhost:8080/large.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--large')),
      ).then(done);
    });

    it('Displays as a huge Button', (done) => {
      jasmine.driver.get('http://localhost:8080/huge.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button terra-Button--huge')),
      ).then(done);
    });
  });

  describe('Button Icons', () => {
    it('Displays an icon inline with the Button text', (done) => {
      jasmine.driver.get('http://localhost:8080/icon-default.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button')),
      ).then(done);
    });

    it('Displays an icon only', (done) => {
      jasmine.driver.get('http://localhost:8080/icon-only.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button')),
      ).then(done);
    });

    it('Displays an icon inline with Button text and reversed', (done) => {
      jasmine.driver.get('http://localhost:8080/icon-reversed.html').then(() =>
        jasmine.driver.findElement(By.className('terra-Button')),
      ).then(done);
    });
  });
}
