#include <stdio.h>

int main() {
 
	int cod1, cod2, peca1, peca2;
	float preco1, preco2;
	
	scanf("%d %d %f", &cod1, &peca1, &preco1);
	scanf("%d %d %f", &cod2, &peca2, &preco2);
	
	printf("VALOR A PAGAR: R$ %.2f\n",(peca1 * preco1) + (peca2 * preco2));
	return 0;
}
