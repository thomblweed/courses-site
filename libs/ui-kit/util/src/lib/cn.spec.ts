import { ClassValue } from 'clsx';

import { cn } from './cn';

it('should return correctly concatinated values', () => {
  const classValues = ['hello', 'hello-again'] satisfies ClassValue[];
  const response = cn(classValues);

  expect(response).toEqual('hello hello-again');
});
