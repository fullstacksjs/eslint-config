describe('title', () => {
  beforeAll(() => {});

  afterAll(() => {
    jest.resetAllMocks();
  });

  it('should', () => {
    const { init } = require('../eslint.config');
    const result = init();
    expect(result).toStrictEqual([
      {
        rules: {
          'no-constant-condition': 'off',
          'no-constant-binary-expression': 'off',
        },
      },
    ]);
  });
});
