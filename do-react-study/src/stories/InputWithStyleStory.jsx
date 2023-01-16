import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import InputWithStyle from '../04/InputWithStyle';

storiesOf('InputWithStyle', module)
  .addWithJSX('기본 설정', () => <InputWithStyle name="name" />)
  .add('label 예제', () => <InputWithStyle name="name" label="이름" />)
  .add('value 예제', () => <InputWithStyle name="name" label="이름" value="두잇" />)
  .add('errorMessage 예제', () => (
    <InputWithStyle name="name" label="이름" errorMessage="이름을 입력해주세요." />
  ));
