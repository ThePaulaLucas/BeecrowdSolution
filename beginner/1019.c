#include <stdio.h>

int main(void) 
{
	int valor;
	scanf("%d", &valor);
	printf("%d:%d:%d\n", valor / 3600, (valor % 3600) / 60, ((valor % 3600) %  60));
	return 0;
}
