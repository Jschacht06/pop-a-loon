import Default, { BalloonOptions } from './default';

export default class metalloon extends Default {
  public static readonly spawn_chance: number = 0.1;
  // @ts-ignore
  public get name(): 'metal' {
    return 'metal';
  }

  public get options(): BalloonOptions {
    return {
      ...super.options,
      // Override options here
      // e.g. the image url
      imageUrl: 'example.svg',
    };
  }
}