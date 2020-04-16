export interface YesNoDto {
  answer: 'yes' | 'no' | 'maybe'
  forced: boolean
  image: string
}

export class YesNoDtoMother {
  static yes(): YesNoDto {
    return {
      answer: 'yes',
      forced: true,
      image: 'irrelevant'
    }
  }

  static no(): YesNoDto {
    return {
      answer: 'no',
      forced: true,
      image: 'irrelevant'
    }
  }
}
