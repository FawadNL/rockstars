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
  transform(time: number): string {
    const millisecond = 1000;
    const second = 60;
    const minuteDurationOfSong = Math.floor(time / millisecond / second);
    const secondDurationOfSong = Math.floor((time / millisecond) % second);
    return ` ${minuteDurationOfSong} : ${secondDurationOfSong}`;
  }

}
