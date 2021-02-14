export default function convertDays(value: number): string {
  const days = [
   'Domingo',
   'Segunda-feira',
   'Terça-feira',
   'Quarta-feira',
   'Quinta-feira',
   'Sexta-feira',
   'Sábado',
  ];
  return days[value - 1];
}