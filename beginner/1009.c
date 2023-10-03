#include <stdio.h>

int main() {
	char nome[21];
	double salario, totalVendas;
	scanf("%s %lf %lf", nome, &salario, &totalVendas);
	printf("TOTAL = R$ %.2f\n", salario + (totalVendas * 0.15));
	return 0;
}
