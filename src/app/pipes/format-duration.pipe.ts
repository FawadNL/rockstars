import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatDuration'
})
export class FormatDurationPipe implements PipeTransform {

  /**
   * @description This function is used to transform duration of songs to minute and second.
   *
   * @param time This is songs duration in milliseconds.
   * @param args Additional arguments if needed.
   */
  transform(time: number, ...args: any[]): unknown {
    const Millisecond = 1000;
    const Second = 60;
    const MinuteDurationOfSong = Math.floor(time / Millisecond / Second);
    const SecondDurationOfSong = Math.floor((time / Millisecond) % Second);
    return ` ${MinuteDurationOfSong} : ${SecondDurationOfSong}`;
  }

}
