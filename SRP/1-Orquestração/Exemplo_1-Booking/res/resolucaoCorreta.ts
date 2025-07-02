// Agora estão isolados, cada um realizando suas únicas responsabilidades

class BookingValidator {
  validateDates(startDate: Date, endDate: Date) {
    if (startDate >= endDate) {
      throw new Error("Data de check-out deve ser após a data de check-in");
    }
  }
}

class BookingPriceCalculator {
  calculatePrice(dailyRate: number, startDate: Date, endDate: Date): number {
    const durationInDays = Math.ceil(
      (endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24)
    );
    return dailyRate * durationInDays;
  }
}

class EmailService {
  sendConfirmation(email: string) {
    console.log(`Enviando e-mail de confirmação para ${email}`);
  }
}

class BookingService {
  constructor(
    private validator: BookingValidator,
    private priceCalculator: BookingPriceCalculator,
    private emailService: EmailService
  ) {}

  // Dessa forma até esse método que faz a orquestração tem apenas uma
  // responsabilidade, mas faz várias tarefas, por suas dependências

  processBooking(bookingDetails: any) {
    this.validator.validateDates(
      bookingDetails.startDate,
      bookingDetails.endDa9te
    );

    // Podemos dizer que o BookingService não calcula o preço e sim
    // usa uma calculadora pra isso

    const totalPrice = this.priceCalculator.calculatePrice(
      bookingDetails.dailyRate,
      bookingDetails.startDate,
      bookingDetails.endDate
    );
    console.log(`Preço total calculado: R$${totalPrice}`);
    this.emailService.sendConfirmation(bookingDetails.email);
  }
}
