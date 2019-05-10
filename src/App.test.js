import {calcTauxRemise, calcPrixAchatNet, calcPrixVenteNet, calcCoeffMultiplicateur} from './components/Calculatrice/calculator';

test('calcTauxRemise', () => {
    const value = calcTauxRemise(10, 8);
    expect(value).toBe(-25);
});

test('calcPrixAchatNet', () => {
    const value = calcPrixAchatNet(8, -25);
    expect(value).toBe(10);
});

test('calcPrixVenteNet', () => {
    const value = calcPrixVenteNet(10, 1.1);
    expect(value).toBe(11);
});

test('calcCoeffMultiplicateur', () => {
    const value = calcCoeffMultiplicateur(15, 10);
    expect(value).toBe(1.5);
});