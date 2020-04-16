import { mock, when, instance, deepEqual } from 'ts-mockito'
import { YesNoHttpRepository } from './yes-no-http-repository'
import { YesNoDtoToYesNoMapper } from './yes-no-dto-to-yes-no-mapper'
import { YesNoDtoMother } from './yes-no-dto'
import { Http } from './http'

describe('YesNoHttpRepository', () => {
  it('should find a yes', async () => {

    const http = mock(Http)
    when(http.get('https://yesno.wtf/api/')).thenResolve(YesNoDtoMother.yes())

    const yesNoMapper: YesNoDtoToYesNoMapper = mock(YesNoDtoToYesNoMapper)
    when(yesNoMapper.map(deepEqual(YesNoDtoMother.yes()))).thenReturn({
      answer: 'yes',
      image: 'irrelevant'
    })

    console.log(instance(yesNoMapper).map(YesNoDtoMother.yes()))

    const yesNoRepo = new YesNoHttpRepository(
      instance(http),
      instance(yesNoMapper)
    )

    const actual = await yesNoRepo.find()

    expect(actual).toEqual({
      answer: 'yes',
      image: 'irrelevant'
    })

  })
})