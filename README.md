Exercise inspired by https://medium.com/@peterxjang/comparing-frontend-frameworks-part-1-introduction-6cf3d49e42cf

In fact, the html and css templates are shamelessly copied from Peter Xjang's

## Testing:

    karma start





## Setting up a new project:

  - npm init -y
  - npm install karma --save-dev
  - npm install karma-jasmine karma-chrome-launcher jasmine-core --save-dev
  - npm install -g karma-cli
  - karma init 
  - set up fake test with something like

    describe('a sample feature', () => {
      it('works', () => {
        expect(0).toBe(1)
      })
    })

  - karma start
  - fix the test and run the test again
