#include <stdio.h>

int main() {
	int numeroFuncionario, horasTrabalhadas;
	float salarioHora; 
	scanf("%d %d %f", &numeroFuncionario, &horasTrabalhadas ,&salarioHora);
	printf("NUMBER = %d\n", numeroFuncionario);
	printf("SALARY = U$ %.2f\n", horasTrabalhadas * salarioHora);
	return 0;
}
