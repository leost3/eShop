export default class Id {
  value: string;
  constructor(value: string){
    if (!this.validate(value)) throw new Error("invalid id");
    this.value = value;
  }

  FACTOR_DIGIT_1 = 10;
  FACTOR_DIGIT_2 = 11;
  MAX_DIGITS_1 = 9;
  MAX_DIGITS_2 = 10;

  validate(id = "") {
    id = this.extractDigits(id);
    if (this.isInvalidLength(id)) return false;
    if (this.isBlocked(id)) return false;
    const digit1 = this.calculateDigit(
      id,
      this.FACTOR_DIGIT_1,
      this.MAX_DIGITS_1
    );
    const digit2 = this.calculateDigit(
      id,
      this.FACTOR_DIGIT_2,
      this.MAX_DIGITS_2
    );
    let calculatedCheckDigit = `${digit1}${digit2}`;
    return this.getCheckDigit(id) == calculatedCheckDigit;
  }

  extractDigits(id: string) {
    return id.replace(/\D/g, "");
  }

  isInvalidLength(id: string) {
    return id.length !== 11;
  }

  isBlocked(id: string) {
    const [digit1] = id;
    return id.split("").every((digit) => digit === digit1);
  }

  calculateDigit(id: string, factor: number, max: number) {
    let total = 0;
    for (const digit of this.toDigitArray(id).slice(0, max)) {
      total += digit * factor--;
    }
    return total % 11 < 2 ? 0 : 11 - (total % 11);
  }

  toDigitArray(id: string) {
    return [...id].map((digit) => parseInt(digit));
  }

  getCheckDigit(id: string) {
    return id.slice(9);
  }
}