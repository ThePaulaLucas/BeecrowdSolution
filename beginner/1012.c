#include <stdio.h>
#include <math.h>
#define PI 3.14159

int main()
{
	double x, y, z;
	scanf("%lf %lf %lf", &x, &y, &z);
	
	printf("TRIANGULO: %.3f\n", (x * z) / 2);
	printf("CIRCULO: %.3f\n", PI * pow(z, 2));
	printf("TRAPEZIO: %.3f\n", (z * (x + y)) / 2);
	printf("QUADRADO: %.3f\n", pow(y, 2));
	printf("RETANGULO: %.3f\n", x * y);
	
	return 0;
}
