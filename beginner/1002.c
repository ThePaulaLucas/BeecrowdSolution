#include <stdio.h>
#include <math.h>

int main() {
 
    double raio, PI, area;
    PI = 3.14159;
    scanf("%lf", &raio);
    area = PI * pow(raio, 2);
    printf("A=%.4lf\n", area);
 
    return 0;
}
