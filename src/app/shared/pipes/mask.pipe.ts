import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mask'
})
export class MaskPipe implements PipeTransform {

  transform(value: unknown, count: number = 0, maskChar: string = '*'): string | null {
    if (value === null || value === undefined) {
      return null;
    }

    const str = String(value);

    if (!Number.isFinite(count) || count <= 0) {
      return str;
    }

    const maskCount = Math.min(Math.max(Math.floor(count), 0), str.length);
    if (maskCount === 0) {
      return str;
    }

    const masked = maskChar.repeat(maskCount) + str.slice(maskCount);
    return masked;
  }

}
