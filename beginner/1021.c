#include <stdio.h>
#include <math.h>

int main()
{	
	double valor; 
	int restoMoeda;
	scanf ("%lf", &valor);
	valor *= 1000;
	printf("NOTAS:\n");
	printf("%d nota(s) de R$ 100.00\n",(int)valor / 100000);
	printf("%d nota(s) de R$ 50.00\n", ((int)valor % 100000) / 50000);
	printf("%d nota(s) de R$ 20.00\n", (((int)valor % 100000) % 50000) / 20000);
	printf("%d nota(s) de R$ 10.00\n", ((((int)valor % 100000) % 50000) % 20000) / 10000);
	printf("%d nota(s) de R$ 5.00\n",  (((((int)valor % 100000) % 50000) % 20000) % 10000) / 5000);	
	printf("%d nota(s) de R$ 2.00\n",  ((((((int)valor % 100000) % 50000) % 20000) % 10000) % 5000) / 2000);	

	restoMoeda = (((((((int)valor % 100000) % 50000) % 20000) % 10000) % 5000) % 2000);

	printf("MOEDAS:\n");
	printf("%d moeda(s) de R$ 1.00\n", restoMoeda / 1000);
	printf("%d moeda(s) de R$ 0.50\n", (restoMoeda % 1000) / 500);
	printf("%d moeda(s) de R$ 0.25\n", ((restoMoeda % 1000) % 500) / 250);
	printf("%d moeda(s) de R$ 0.10\n", (((restoMoeda % 1000) % 500) % 250) / 100);
	printf("%d moeda(s) de R$ 0.05\n", ((((restoMoeda % 1000) % 500) % 250) % 100) / 50);	
	printf("%d moeda(s) de R$ 0.01\n", (((((restoMoeda % 1000) % 500) % 250) % 100) % 50) / 10);
