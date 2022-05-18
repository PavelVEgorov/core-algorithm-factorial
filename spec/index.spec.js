const {iterativeFactorialCalculation, recursiveFactorialCalc} = require('../index');


  test('iterativeFactorialCalculation', () => {
    expect(iterativeFactorialCalculation(0)).toBe(1);
    expect(iterativeFactorialCalculation(1)).toBe(1);
    expect(iterativeFactorialCalculation(2)).toBe(2);
    expect(iterativeFactorialCalculation(3)).toBe(6);
    expect(iterativeFactorialCalculation(4)).toBe(24);
    expect(iterativeFactorialCalculation(5)).toBe(120);
    expect(iterativeFactorialCalculation(6)).toBe(720);
    expect(iterativeFactorialCalculation(7)).toBe(5040);
    expect(iterativeFactorialCalculation(8)).toBe(40320);
    expect(iterativeFactorialCalculation(9)).toBe(362880);
    expect(iterativeFactorialCalculation(10)).toBe(3628800);
  })

  test('recursiveFactorialCalc', () => {
    // const fact0 = recursiveFactorialCalc(0);
    // const fact1 = recursiveFactorialCalc(2);
    // const fact2 = recursiveFactorialCalc(6);
    // const fact3 = recursiveFactorialCalc(7);

    // expect(fact0).toBe(1);
    // expect(fact1).toBe(2);
    // expect(fact2).toBe(720);
    // expect(fact3).toBe(5040);
    expect(recursiveFactorialCalc(0)).toBe(1);
    expect(recursiveFactorialCalc(1)).toBe(1);
    expect(recursiveFactorialCalc(2)).toBe(2);
    expect(recursiveFactorialCalc(3)).toBe(6);
    expect(recursiveFactorialCalc(4)).toBe(24);
    expect(recursiveFactorialCalc(5)).toBe(120);
    expect(recursiveFactorialCalc(6)).toBe(720);
    expect(recursiveFactorialCalc(7)).toBe(5040);
    expect(recursiveFactorialCalc(8)).toBe(40320);
    expect(recursiveFactorialCalc(9)).toBe(362880);
    expect(recursiveFactorialCalc(10)).toBe(3628800);
  })
