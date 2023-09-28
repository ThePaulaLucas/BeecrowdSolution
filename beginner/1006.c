#include <stdio.h>

int main() {
	double x, y, z, MEDIA;
	scanf("%lf %lf %lf", &x, &y, &z);
	MEDIA = ((x * 2) + (y * 3) + (z * 5)) / 10;
	printf("MEDIA = %.1lf\n", MEDIA);
	return 0; 
}
