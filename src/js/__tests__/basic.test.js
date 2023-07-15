import Validator from '../basic.js'

test('верный ник', () => {
    const nickname = new Validator
    const result = nickname.validateUsername('Go0d_N1ck_Name') 
    expect(result).toBe(true);
  });

test('ник с недопустимыми символами', () => {
    const nickname = new Validator
    const result = nickname.validateUsername('Go0d_N1ck%Name') 
    expect(result).toBe(false);
});

test('ник с лишними цифрами', () => {
    const nickname = new Validator
    const result = nickname.validateUsername('Go0d_N1234ck_Name') 
    expect(result).toBe(false);
});