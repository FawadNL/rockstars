import { FormatDurationPipe } from './format-duration.pipe';

describe('FormatDurationPipe', () => {
  it('create an instance', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe).toBeTruthy();
  });

  it('Must have transform function', () => {
    const pipe = new FormatDurationPipe();
    expect(pipe.transform).toBeDefined('transform');
  });

});
